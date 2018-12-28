package simpledynatable;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServiceController {

    private final AtomicLong counter = new AtomicLong();

    private String [][] services = { { "Service1", "1.0.45","Running" },
    								 { "DataAdaptor", "2.1.5","Stopped" },
    								 { "MessageQueueListener", "4.2.18","Stopped" } 
    };
    
    private List<ServiceInfo> info;
    
    public ServiceController() {
		
    	info = new ArrayList<>();
    	
    	for (int i = 0; i < services.length; i++) {
    		info.add(createServiceInfo(services[i][0], services[i][1],services[i][2]));	
		}
    	    	
	}
 
    
    @RequestMapping("/serviceInfos")
    public List<ServiceInfo> getServiceInfo() {
    	
    	System.out.println("serviceInfos called");
    	
        return info;
    }

    private static ServiceInfo createServiceInfo(String n, String v, String s ) {
    	ServiceInfo serviceInfo = new ServiceInfo();
    	
    	serviceInfo.setName(n);
    	serviceInfo.setVersion(v);
    	serviceInfo.setStatus(s);
    	
    	return serviceInfo;
    	
    }
}
