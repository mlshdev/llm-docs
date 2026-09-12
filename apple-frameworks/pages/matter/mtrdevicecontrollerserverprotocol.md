> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerserverprotocol](https://developer.apple.com/documentation/matter/mtrdevicecontrollerserverprotocol)

# MTRDeviceControllerServerProtocol (Swift)

**Framework:** Matter  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
protocol MTRDeviceControllerServerProtocol : NSObjectProtocol
```

## Topics

### Instance Methods

- [downloadLog(withController:nodeId:type:timeout:completion:)](mtrdevicecontrollerserverprotocol/downloadlog%28withcontroller_nodeid_type_timeout_completion_%29.md)
- [getAnyDeviceController(completion:)](mtrdevicecontrollerserverprotocol/getanydevicecontroller%28completion_%29.md)
- [getDeviceController(withFabricId:completion:)](mtrdevicecontrollerserverprotocol/getdevicecontroller%28withfabricid_completion_%29.md): Deprecated.
- [invokeCommand(withController:nodeId:endpointId:clusterId:commandId:fields:timedInvokeTimeout:completion:)](mtrdevicecontrollerserverprotocol/invokecommand%28withcontroller_nodeid_endpointid_clusterid_commandid_fields_timedinvoketimeout_completion_%29.md)
- [readAttribute(withController:nodeId:endpointId:clusterId:attributeId:params:completion:)](mtrdevicecontrollerserverprotocol/readattribute%28withcontroller_nodeid_endpointid_clusterid_attributeid_params_completion_%29.md)
- [readAttributeCache(withController:nodeId:endpointId:clusterId:attributeId:completion:)](mtrdevicecontrollerserverprotocol/readattributecache%28withcontroller_nodeid_endpointid_clusterid_attributeid_completion_%29.md)
- [stopReports(withController:nodeId:completion:)](mtrdevicecontrollerserverprotocol/stopreports%28withcontroller_nodeid_completion_%29.md)
- [subscribe(withController:nodeId:minInterval:maxInterval:params:shouldCache:completion:)](mtrdevicecontrollerserverprotocol/subscribe%28withcontroller_nodeid_mininterval_maxinterval_params_shouldcache_completion_%29.md)
- [subscribeAttribute(withController:nodeId:endpointId:clusterId:attributeId:minInterval:maxInterval:params:establishedHandler:)](mtrdevicecontrollerserverprotocol/subscribeattribute%28withcontroller_nodeid_endpointid_clusterid_attributeid_mininterval_maxinterval_params_establishedhandler_%29.md)
- [writeAttribute(withController:nodeId:endpointId:clusterId:attributeId:value:timedWriteTimeout:completion:)](mtrdevicecontrollerserverprotocol/writeattribute%28withcontroller_nodeid_endpointid_clusterid_attributeid_value_timedwritetimeout_completion_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRDeviceControllerServerProtocol (Objective-C)

**Framework:** Matter  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
@protocol MTRDeviceControllerServerProtocol <NSObject>
```

## Topics

### Instance Methods

- [downloadLogWithController:nodeId:type:timeout:completion:](mtrdevicecontrollerserverprotocol/downloadlog%28withcontroller_nodeid_type_timeout_completion_%29.md)
- [getAnyDeviceControllerWithCompletion:](mtrdevicecontrollerserverprotocol/getanydevicecontroller%28completion_%29.md)
- [getDeviceControllerWithFabricId:completion:](mtrdevicecontrollerserverprotocol/getdevicecontroller%28withfabricid_completion_%29.md): Deprecated.
- [invokeCommandWithController:nodeId:endpointId:clusterId:commandId:fields:timedInvokeTimeout:completion:](mtrdevicecontrollerserverprotocol/invokecommand%28withcontroller_nodeid_endpointid_clusterid_commandid_fields_timedinvoketimeout_completion_%29.md)
- [readAttributeWithController:nodeId:endpointId:clusterId:attributeId:params:completion:](mtrdevicecontrollerserverprotocol/readattribute%28withcontroller_nodeid_endpointid_clusterid_attributeid_params_completion_%29.md)
- [readAttributeCacheWithController:nodeId:endpointId:clusterId:attributeId:completion:](mtrdevicecontrollerserverprotocol/readattributecache%28withcontroller_nodeid_endpointid_clusterid_attributeid_completion_%29.md)
- [stopReportsWithController:nodeId:completion:](mtrdevicecontrollerserverprotocol/stopreports%28withcontroller_nodeid_completion_%29.md)
- [subscribeWithController:nodeId:minInterval:maxInterval:params:shouldCache:completion:](mtrdevicecontrollerserverprotocol/subscribe%28withcontroller_nodeid_mininterval_maxinterval_params_shouldcache_completion_%29.md)
- [subscribeAttributeWithController:nodeId:endpointId:clusterId:attributeId:minInterval:maxInterval:params:establishedHandler:](mtrdevicecontrollerserverprotocol/subscribeattribute%28withcontroller_nodeid_endpointid_clusterid_attributeid_mininterval_maxinterval_params_establishedhandler_%29.md)
- [writeAttributeWithController:nodeId:endpointId:clusterId:attributeId:value:timedWriteTimeout:completion:](mtrdevicecontrollerserverprotocol/writeattribute%28withcontroller_nodeid_endpointid_clusterid_attributeid_value_timedwritetimeout_completion_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
