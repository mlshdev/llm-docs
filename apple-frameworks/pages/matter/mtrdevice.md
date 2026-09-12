> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevice](https://developer.apple.com/documentation/matter/mtrdevice)

# MTRDevice (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRDevice
```

## Topics

### Initializers

- [init(nodeID:controller:)](mtrdevice/init%28nodeid_controller_%29.md)
- [init(nodeID:deviceController:)](mtrdevice/init%28nodeid_devicecontroller_%29.md): Deprecated.

### Instance Properties

- [deviceCachePrimed](mtrdevice/devicecacheprimed.md)
- [deviceController](mtrdevice/devicecontroller.md)
- [estimatedStartTime](mtrdevice/estimatedstarttime.md)
- [estimatedSubscriptionLatency](mtrdevice/estimatedsubscriptionlatency.md)
- [state](mtrdevice/state.md)
- [networkCommissioningFeatures](mtrdevice/networkcommissioningfeatures.md): Network commissioning features supported by the device.
- [productID](mtrdevice/productid.md): The Product Identifier associated with the device.
- [vendorID](mtrdevice/vendorid.md): The Vendor Identifier associated with the device.

### Instance Methods

- [downloadLog(of:timeout:queue:completion:)](mtrdevice/downloadlog%28of_timeout_queue_completion_%29.md)
- [invokeCommand(withEndpointID:clusterID:commandID:commandFields:expectedValues:expectedValueInterval:queue:completion:)](mtrdevice/invokecommand%28withendpointid_clusterid_commandid_commandfields_expectedvalues_expectedvalueinterval_queue_completion_%29.md)
- [invokeCommand(withEndpointID:clusterID:commandID:commandFields:expectedValues:expectedValueInterval:timedInvokeTimeout:clientQueue:completion:)](mtrdevice/invokecommand%28withendpointid_clusterid_commandid_commandfields_expectedvalues_expectedvalueinterval_timedinvoketimeout_clientqueue_completion_%29.md): Deprecated.
- [invokeCommand(withEndpointID:clusterID:commandID:commandFields:expectedValues:expectedValueInterval:timedInvokeTimeout:queue:completion:)](mtrdevice/invokecommand%28withendpointid_clusterid_commandid_commandfields_expectedvalues_expectedvalueinterval_timedinvoketimeout_queue_completion_%29.md)
- [openCommissioningWindow(withDiscriminator:duration:queue:completion:)](mtrdevice/opencommissioningwindow%28withdiscriminator_duration_queue_completion_%29.md)
- [openCommissioningWindow(withSetupPasscode:discriminator:duration:queue:completion:)](mtrdevice/opencommissioningwindow%28withsetuppasscode_discriminator_duration_queue_completion_%29.md)
- [readAttribute(withEndpointID:clusterID:attributeID:params:)](mtrdevice/readattribute%28withendpointid_clusterid_attributeid_params_%29.md)
- [setDelegate(\_:queue:)](mtrdevice/setdelegate%28__queue_%29.md): Deprecated.
- [writeAttribute(withEndpointID:clusterID:attributeID:value:expectedValueInterval:timedWriteTimeout:)](mtrdevice/writeattribute%28withendpointid_clusterid_attributeid_value_expectedvalueinterval_timedwritetimeout_%29.md)
- [add(\_:queue:)](mtrdevice/add%28__queue_%29.md): Adds a delegate to receive asynchronous callbacks about the device.
- [add(\_:queue:interestedPathsForAttributes:interestedPathsForEvents:)](mtrdevice/add%28__queue_interestedpathsforattributes_interestedpathsforevents_%29.md): Adds a delegate to receive asynchronous callbacks about the device, and limit attribute and/or event reports to a specific set of paths.
- [descriptorClusters()](mtrdevice/descriptorclusters%28%29.md): Read all known attributes from descriptor clusters on all known endpoints.
- [invokeCommands(\_:queue:completion:)](mtrdevice/invokecommands%28__queue_completion_%29.md): Invoke one or more groups of commands.
- [readAttributePaths(\_:)](mtrdevice/readattributepaths%28__%29.md): Read the attributes identified by the provided attribute paths. The paths can include wildcards.
- [remove(\_:)](mtrdevice/remove%28__%29.md): Removes the delegate from receiving callbacks about the device.
- [wait(forAttributeValues:timeout:queue:completion:)](mtrdevice/wait%28forattributevalues_timeout_queue_completion_%29.md): Sets up the provided completion to be called when any of the following happens:

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRDevice (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRDevice : NSObject
```

## Topics

### Initializers

- [deviceWithNodeID:controller:](mtrdevice/init%28nodeid_controller_%29.md)
- [deviceWithNodeID:deviceController:](mtrdevice/init%28nodeid_devicecontroller_%29.md): Deprecated.

### Instance Properties

- [deviceCachePrimed](mtrdevice/devicecacheprimed.md)
- [deviceController](mtrdevice/devicecontroller.md)
- [estimatedStartTime](mtrdevice/estimatedstarttime.md)
- [estimatedSubscriptionLatency](mtrdevice/estimatedsubscriptionlatency.md)
- [state](mtrdevice/state.md)
- [nodeID](mtrdevice/nodeid.md)
- [networkCommissioningFeatures](mtrdevice/networkcommissioningfeatures.md): Network commissioning features supported by the device.
- [productID](mtrdevice/productid.md): The Product Identifier associated with the device.
- [vendorID](mtrdevice/vendorid.md): The Vendor Identifier associated with the device.

### Instance Methods

- [downloadLogOfType:timeout:queue:completion:](mtrdevice/downloadlog%28of_timeout_queue_completion_%29.md)
- [invokeCommandWithEndpointID:clusterID:commandID:commandFields:expectedValues:expectedValueInterval:queue:completion:](mtrdevice/invokecommand%28withendpointid_clusterid_commandid_commandfields_expectedvalues_expectedvalueinterval_queue_completion_%29.md)
- [invokeCommandWithEndpointID:clusterID:commandID:commandFields:expectedValues:expectedValueInterval:timedInvokeTimeout:clientQueue:completion:](mtrdevice/invokecommand%28withendpointid_clusterid_commandid_commandfields_expectedvalues_expectedvalueinterval_timedinvoketimeout_clientqueue_completion_%29.md): Deprecated.
- [invokeCommandWithEndpointID:clusterID:commandID:commandFields:expectedValues:expectedValueInterval:timedInvokeTimeout:queue:completion:](mtrdevice/invokecommand%28withendpointid_clusterid_commandid_commandfields_expectedvalues_expectedvalueinterval_timedinvoketimeout_queue_completion_%29.md)
- [openCommissioningWindowWithDiscriminator:duration:queue:completion:](mtrdevice/opencommissioningwindow%28withdiscriminator_duration_queue_completion_%29.md)
- [openCommissioningWindowWithSetupPasscode:discriminator:duration:queue:completion:](mtrdevice/opencommissioningwindow%28withsetuppasscode_discriminator_duration_queue_completion_%29.md)
- [readAttributeWithEndpointID:clusterID:attributeID:params:](mtrdevice/readattribute%28withendpointid_clusterid_attributeid_params_%29.md)
- [setDelegate:queue:](mtrdevice/setdelegate%28__queue_%29.md): Deprecated.
- [writeAttributeWithEndpointID:clusterID:attributeID:value:expectedValueInterval:timedWriteTimeout:](mtrdevice/writeattribute%28withendpointid_clusterid_attributeid_value_expectedvalueinterval_timedwritetimeout_%29.md)
- [addDelegate:queue:](mtrdevice/add%28__queue_%29.md): Adds a delegate to receive asynchronous callbacks about the device.
- [addDelegate:queue:interestedPathsForAttributes:interestedPathsForEvents:](mtrdevice/add%28__queue_interestedpathsforattributes_interestedpathsforevents_%29.md): Adds a delegate to receive asynchronous callbacks about the device, and limit attribute and/or event reports to a specific set of paths.
- [descriptorClusters](mtrdevice/descriptorclusters%28%29.md): Read all known attributes from descriptor clusters on all known endpoints.
- [invokeCommands:queue:completion:](mtrdevice/invokecommands%28__queue_completion_%29.md): Invoke one or more groups of commands.
- [readAttributePaths:](mtrdevice/readattributepaths%28__%29.md): Read the attributes identified by the provided attribute paths. The paths can include wildcards.
- [removeDelegate:](mtrdevice/remove%28__%29.md): Removes the delegate from receiving callbacks about the device.
- [waitForAttributeValues:timeout:queue:completion:](mtrdevice/wait%28forattributevalues_timeout_queue_completion_%29.md): Sets up the provided completion to be called when any of the following happens:

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
