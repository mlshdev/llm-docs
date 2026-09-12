> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcserverprotocol_mtrdevice](https://developer.apple.com/documentation/matter/mtrxpcserverprotocol_mtrdevice)

# MTRXPCServerProtocol_MTRDevice (Swift)

**Framework:** Matter  
**Kind:** Protocol  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```swift
protocol MTRXPCServerProtocol_MTRDevice : NSObjectProtocol
```

## Topics

### Instance Methods

- [deviceController(\_:nodeID:downloadLogOf:timeout:completion:)](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_downloadlogof_timeout_completion_%29.md)
- [deviceController(\_:nodeID:getDeviceCachePrimedWithReply:)](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_getdevicecacheprimedwithreply_%29.md)
- [deviceController(\_:nodeID:getEstimatedStartTimeWithReply:)](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_getestimatedstarttimewithreply_%29.md)
- [deviceController(\_:nodeID:getEstimatedSubscriptionLatencyWithReply:)](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_getestimatedsubscriptionlatencywithreply_%29.md)
- [deviceController(\_:nodeID:getStateWithReply:)](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_getstatewithreply_%29.md)
- [deviceController(\_:nodeID:invokeCommandWithEndpointID:clusterID:commandID:commandFields:expectedValues:expectedValueInterval:timedInvokeTimeout:serverSideProcessingTimeout:completion:)](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_invokecommandwithendpointid_clusterid_commandid_commandfields_expectedvalues_expectedvalueinterval_timedinvoketimeout_serversideprocessingtimeout_completi~ccb964c0.md)
- [deviceController(\_:nodeID:invokeCommands:completion:)](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_invokecommands_completion_%29.md)
- [deviceController(\_:nodeID:openCommissioningWindowWithSetupPasscode:discriminator:duration:completion:)](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_opencommissioningwindowwithsetuppasscode_discriminator_duration_completion_%29.md)
- [deviceController(\_:nodeID:readAttributePaths:withReply:)](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_readattributepaths_withreply_%29.md)
- [deviceController(\_:nodeID:readAttributeWithEndpointID:clusterID:attributeID:params:withReply:)](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_readattributewithendpointid_clusterid_attributeid_params_withreply_%29.md)
- [deviceController(\_:nodeID:writeAttributeWithEndpointID:clusterID:attributeID:value:expectedValueInterval:timedWriteTimeout:)](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_writeattributewithendpointid_clusterid_attributeid_value_expectedvalueinterval_timedwritetimeout_%29.md)
- [downloadLog(of:nodeID:timeout:completion:)](mtrxpcserverprotocol_mtrdevice/downloadlog%28of_nodeid_timeout_completion_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTRXPCServerProtocol](mtrxpcserverprotocol.md)

# MTRXPCServerProtocol_MTRDevice (Objective-C)

**Framework:** Matter  
**Kind:** Protocol  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```objectivec
@protocol MTRXPCServerProtocol_MTRDevice <NSObject>
```

## Topics

### Instance Methods

- [deviceController:nodeID:downloadLogOfType:timeout:completion:](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_downloadlogof_timeout_completion_%29.md)
- [deviceController:nodeID:getDeviceCachePrimedWithReply:](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_getdevicecacheprimedwithreply_%29.md)
- [deviceController:nodeID:getEstimatedStartTimeWithReply:](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_getestimatedstarttimewithreply_%29.md)
- [deviceController:nodeID:getEstimatedSubscriptionLatencyWithReply:](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_getestimatedsubscriptionlatencywithreply_%29.md)
- [deviceController:nodeID:getStateWithReply:](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_getstatewithreply_%29.md)
- [deviceController:nodeID:invokeCommandWithEndpointID:clusterID:commandID:commandFields:expectedValues:expectedValueInterval:timedInvokeTimeout:serverSideProcessingTimeout:completion:](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_invokecommandwithendpointid_clusterid_commandid_commandfields_expectedvalues_expectedvalueinterval_timedinvoketimeout_serversideprocessingtimeout_completi~ccb964c0.md)
- [deviceController:nodeID:invokeCommands:completion:](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_invokecommands_completion_%29.md)
- [deviceController:nodeID:openCommissioningWindowWithSetupPasscode:discriminator:duration:completion:](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_opencommissioningwindowwithsetuppasscode_discriminator_duration_completion_%29.md)
- [deviceController:nodeID:readAttributePaths:withReply:](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_readattributepaths_withreply_%29.md)
- [deviceController:nodeID:readAttributeWithEndpointID:clusterID:attributeID:params:withReply:](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_readattributewithendpointid_clusterid_attributeid_params_withreply_%29.md)
- [deviceController:nodeID:writeAttributeWithEndpointID:clusterID:attributeID:value:expectedValueInterval:timedWriteTimeout:](mtrxpcserverprotocol_mtrdevice/devicecontroller%28__nodeid_writeattributewithendpointid_clusterid_attributeid_value_expectedvalueinterval_timedwritetimeout_%29.md)
- [downloadLogOfType:nodeID:timeout:completion:](mtrxpcserverprotocol_mtrdevice/downloadlog%28of_nodeid_timeout_completion_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [MTRXPCServerProtocol](mtrxpcserverprotocol.md)
