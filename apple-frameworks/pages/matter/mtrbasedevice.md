> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbasedevice](https://developer.apple.com/documentation/matter/mtrbasedevice)

# MTRBaseDevice (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRBaseDevice
```

## Topics

### Initializers

- [init(nodeID:controller:)](mtrbasedevice/init%28nodeid_controller_%29.md)

### Instance Properties

- [sessionTransportType](mtrbasedevice/sessiontransporttype.md)

### Instance Methods

- [deregisterReportHandlers(with:completion:)](mtrbasedevice/deregisterreporthandlers%28with_completion_%29.md)
- [deregisterReportHandlers(withClientQueue:completion:)](mtrbasedevice/deregisterreporthandlers%28withclientqueue_completion_%29.md): Deprecated.
- [downloadLog(of:timeout:queue:completion:)](mtrbasedevice/downloadlog%28of_timeout_queue_completion_%29.md)
- [invokeCommand(withEndpointID:clusterID:commandID:commandFields:timedInvokeTimeout:queue:completion:)](mtrbasedevice/invokecommand%28withendpointid_clusterid_commandid_commandfields_timedinvoketimeout_queue_completion_%29.md)
- [invokeCommand(withEndpointId:clusterId:commandId:commandFields:timedInvokeTimeout:clientQueue:completion:)](mtrbasedevice/invokecommand%28withendpointid_clusterid_commandid_commandfields_timedinvoketimeout_clientqueue_completion_%29.md): Deprecated.
- [openCommissioningWindow(withDiscriminator:duration:queue:completion:)](mtrbasedevice/opencommissioningwindow%28withdiscriminator_duration_queue_completion_%29.md)
- [openCommissioningWindow(withSetupPasscode:discriminator:duration:queue:completion:)](mtrbasedevice/opencommissioningwindow%28withsetuppasscode_discriminator_duration_queue_completion_%29.md)
- [readAttribute(withEndpointId:clusterId:attributeId:params:clientQueue:completion:)](mtrbasedevice/readattribute%28withendpointid_clusterid_attributeid_params_clientqueue_completion_%29.md): Deprecated.
- [readAttributePaths(\_:eventPaths:params:queue:completion:)](mtrbasedevice/readattributepaths%28__eventpaths_params_queue_completion_%29.md)
- [readAttributes(withEndpointID:clusterID:attributeID:params:queue:completion:)](mtrbasedevice/readattributes%28withendpointid_clusterid_attributeid_params_queue_completion_%29.md)
- [readEvents(withEndpointID:clusterID:eventID:params:queue:completion:)](mtrbasedevice/readevents%28withendpointid_clusterid_eventid_params_queue_completion_%29.md)
- [subscribe(toAttributePaths:eventPaths:params:queue:reportHandler:subscriptionEstablished:resubscriptionScheduled:)](mtrbasedevice/subscribe%28toattributepaths_eventpaths_params_queue_reporthandler_subscriptionestablished_resubscriptionscheduled_%29.md)
- [subscribe(with:minInterval:maxInterval:params:cacheContainer:attributeReportHandler:eventReportHandler:errorHandler:subscriptionEstablished:resubscriptionScheduled:)](mtrbasedevice/subscribe%28with_mininterval_maxinterval_params_cachecontainer_attributereporthandler_eventreporthandler_errorhandler_subscriptionestablished_resubscriptionscheduled_%29.md): Deprecated.
- [subscribe(with:params:clusterStateCacheContainer:attributeReportHandler:eventReportHandler:errorHandler:subscriptionEstablished:resubscriptionScheduled:)](mtrbasedevice/subscribe%28with_params_clusterstatecachecontainer_attributereporthandler_eventreporthandler_errorhandler_subscriptionestablished_resubscriptionscheduled_%29.md)
- [subscribeAttribute(withEndpointId:clusterId:attributeId:minInterval:maxInterval:params:clientQueue:reportHandler:subscriptionEstablished:)](mtrbasedevice/subscribeattribute%28withendpointid_clusterid_attributeid_mininterval_maxinterval_params_clientqueue_reporthandler_subscriptionestablished_%29.md): Deprecated.
- [subscribeToAttributes(withEndpointID:clusterID:attributeID:params:queue:reportHandler:subscriptionEstablished:)](mtrbasedevice/subscribetoattributes%28withendpointid_clusterid_attributeid_params_queue_reporthandler_subscriptionestablished_%29.md)
- [subscribeToEvents(withEndpointID:clusterID:eventID:params:queue:reportHandler:subscriptionEstablished:)](mtrbasedevice/subscribetoevents%28withendpointid_clusterid_eventid_params_queue_reporthandler_subscriptionestablished_%29.md)
- [writeAttribute(withEndpointID:clusterID:attributeID:value:timedWriteTimeout:queue:completion:)](mtrbasedevice/writeattribute%28withendpointid_clusterid_attributeid_value_timedwritetimeout_queue_completion_%29.md)
- [writeAttribute(withEndpointId:clusterId:attributeId:value:timedWriteTimeout:clientQueue:completion:)](mtrbasedevice/writeattribute%28withendpointid_clusterid_attributeid_value_timedwritetimeout_clientqueue_completion_%29.md): Deprecated.

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

# MTRBaseDevice (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRBaseDevice : NSObject
```

## Topics

### Initializers

- [deviceWithNodeID:controller:](mtrbasedevice/init%28nodeid_controller_%29.md)

### Instance Properties

- [sessionTransportType](mtrbasedevice/sessiontransporttype.md)

### Instance Methods

- [deregisterReportHandlersWithQueue:completion:](mtrbasedevice/deregisterreporthandlers%28with_completion_%29.md)
- [deregisterReportHandlersWithClientQueue:completion:](mtrbasedevice/deregisterreporthandlers%28withclientqueue_completion_%29.md): Deprecated.
- [downloadLogOfType:timeout:queue:completion:](mtrbasedevice/downloadlog%28of_timeout_queue_completion_%29.md)
- [invokeCommandWithEndpointID:clusterID:commandID:commandFields:timedInvokeTimeout:queue:completion:](mtrbasedevice/invokecommand%28withendpointid_clusterid_commandid_commandfields_timedinvoketimeout_queue_completion_%29.md)
- [invokeCommandWithEndpointId:clusterId:commandId:commandFields:timedInvokeTimeout:clientQueue:completion:](mtrbasedevice/invokecommand%28withendpointid_clusterid_commandid_commandfields_timedinvoketimeout_clientqueue_completion_%29.md): Deprecated.
- [openCommissioningWindowWithDiscriminator:duration:queue:completion:](mtrbasedevice/opencommissioningwindow%28withdiscriminator_duration_queue_completion_%29.md)
- [openCommissioningWindowWithSetupPasscode:discriminator:duration:queue:completion:](mtrbasedevice/opencommissioningwindow%28withsetuppasscode_discriminator_duration_queue_completion_%29.md)
- [readAttributeWithEndpointId:clusterId:attributeId:params:clientQueue:completion:](mtrbasedevice/readattribute%28withendpointid_clusterid_attributeid_params_clientqueue_completion_%29.md): Deprecated.
- [readAttributePaths:eventPaths:params:queue:completion:](mtrbasedevice/readattributepaths%28__eventpaths_params_queue_completion_%29.md)
- [readAttributesWithEndpointID:clusterID:attributeID:params:queue:completion:](mtrbasedevice/readattributes%28withendpointid_clusterid_attributeid_params_queue_completion_%29.md)
- [readEventsWithEndpointID:clusterID:eventID:params:queue:completion:](mtrbasedevice/readevents%28withendpointid_clusterid_eventid_params_queue_completion_%29.md)
- [subscribeToAttributePaths:eventPaths:params:queue:reportHandler:subscriptionEstablished:resubscriptionScheduled:](mtrbasedevice/subscribe%28toattributepaths_eventpaths_params_queue_reporthandler_subscriptionestablished_resubscriptionscheduled_%29.md)
- [subscribeWithQueue:minInterval:maxInterval:params:cacheContainer:attributeReportHandler:eventReportHandler:errorHandler:subscriptionEstablished:resubscriptionScheduled:](mtrbasedevice/subscribe%28with_mininterval_maxinterval_params_cachecontainer_attributereporthandler_eventreporthandler_errorhandler_subscriptionestablished_resubscriptionscheduled_%29.md): Deprecated.
- [subscribeWithQueue:params:clusterStateCacheContainer:attributeReportHandler:eventReportHandler:errorHandler:subscriptionEstablished:resubscriptionScheduled:](mtrbasedevice/subscribe%28with_params_clusterstatecachecontainer_attributereporthandler_eventreporthandler_errorhandler_subscriptionestablished_resubscriptionscheduled_%29.md)
- [subscribeAttributeWithEndpointId:clusterId:attributeId:minInterval:maxInterval:params:clientQueue:reportHandler:subscriptionEstablished:](mtrbasedevice/subscribeattribute%28withendpointid_clusterid_attributeid_mininterval_maxinterval_params_clientqueue_reporthandler_subscriptionestablished_%29.md): Deprecated.
- [subscribeToAttributesWithEndpointID:clusterID:attributeID:params:queue:reportHandler:subscriptionEstablished:](mtrbasedevice/subscribetoattributes%28withendpointid_clusterid_attributeid_params_queue_reporthandler_subscriptionestablished_%29.md)
- [subscribeToEventsWithEndpointID:clusterID:eventID:params:queue:reportHandler:subscriptionEstablished:](mtrbasedevice/subscribetoevents%28withendpointid_clusterid_eventid_params_queue_reporthandler_subscriptionestablished_%29.md)
- [writeAttributeWithEndpointID:clusterID:attributeID:value:timedWriteTimeout:queue:completion:](mtrbasedevice/writeattribute%28withendpointid_clusterid_attributeid_value_timedwritetimeout_queue_completion_%29.md)
- [writeAttributeWithEndpointId:clusterId:attributeId:value:timedWriteTimeout:clientQueue:completion:](mtrbasedevice/writeattribute%28withendpointid_clusterid_attributeid_value_timedwritetimeout_clientqueue_completion_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
