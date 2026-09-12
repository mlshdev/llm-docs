> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject](https://developer.apple.com/documentation/iousbhost/iousbhostobject)

# IOUSBHostObject (Swift)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

This class provides basic functionality for sending device requests and retrieving descriptors.

## Declaration

```swift
class IOUSBHostObject
```

## Topics

### Managing the Object Life Cycle

- [IOUSBHostObjectInitOptions](iousbhostobjectinitoptions.md): Options for initializing the host object.
- [IOUSBHostInterestHandler](iousbhostinteresthandler.md): The callback that handles underlying service-state changes.
- [ioService](iousbhostobject/ioservice.md): A reference to the kernel object.
- [queue](iousbhostobject/queue.md): The queue for servicing input/output requests.
- [destroy()](iousbhostobject/destroy%28%29.md): Removes underlying allocations and connections from the USB host object.

### Retrieving Base Class Descriptors

- [Parsing USB Descriptors](parsing-usb-descriptors.md): Extract information from various USB descriptors using helper methods.

### Creating I/O Buffers

- [ioData(withCapacity:)](iousbhostobject/iodata%28withcapacity_%29.md): Allocates a buffer for input/output requests.

### Sending Device Requests

- [IOUSBHostDeviceRequestType(\_:\_:\_:)](iousbhostdevicerequesttype%28______%29.md): Creates the request type field of a device request.
- [IOUSBHostDefaultControlCompletionTimeout](iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.

### Enqueueing Device Requests

- [IOUSBHostCompletionHandler](iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.

### Aborting Device Requests

- [IOUSBHostAbortOption](iousbhostabortoption.md): Options for aborting pending input/output requests.

### Getting Host Information

- [deviceAddress](iousbhostobject/deviceaddress.md): The device’s bus address.

### Instance Properties

- [capabilityDescriptors](iousbhostobject/capabilitydescriptors.md)
- [deviceDescriptor](iousbhostobject/devicedescriptor.md)

### Instance Methods

- [configurationDescriptor(with:)](iousbhostobject/configurationdescriptor%28with_%29.md)
- [configurationDescriptor(withConfigurationValue:)](iousbhostobject/configurationdescriptor%28withconfigurationvalue_%29.md)
- [data(withCapacity:options:)](iousbhostobject/data%28withcapacity_options_%29.md)
- [destroy(options:)](iousbhostobject/destroy%28options_%29.md)

### Related Documentation

- [IOUSBHostDevice](iousbhostdevice.md): The class that claims and configures devices, retrieves descriptors, and sends device requests.
- [IOUSBHostInterface](iousbhostinterface.md): The class for accessing USB-related services.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [IOUSBHostDevice](iousbhostdevice.md)
- [IOUSBHostInterface](iousbhostinterface.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Base Classes

- [IOUSBHostIOSource](iousbhostiosource.md): This class provides basic functionality for deriving pipe and stream classes.

# IOUSBHostObject (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

This class provides basic functionality for sending device requests and retrieving descriptors.

## Declaration

```objectivec
@interface IOUSBHostObject : NSObject
```

## Topics

### Managing the Object Life Cycle

- [IOUSBHostObjectInitOptions](iousbhostobjectinitoptions.md): Options for initializing the host object.
- [initWithIOService:options:queue:error:interestHandler:](iousbhostobject/initwithioservice_options_queue_error_interesthandler_.md): Creates a USB host object and sets up a communication channel to the kernel.
- [initWithIOService:queue:error:interestHandler:](iousbhostobject/initwithioservice_queue_error_interesthandler_.md): Creates a USB host object and sets up a default communication channel to the kernel.
- [IOUSBHostInterestHandler](iousbhostinteresthandler.md): The callback that handles underlying service-state changes.
- [ioService](iousbhostobject/ioservice.md): A reference to the kernel object.
- [queue](iousbhostobject/queue.md): The queue for servicing input/output requests.
- [destroy](iousbhostobject/destroy%28%29.md): Removes underlying allocations and connections from the USB host object.

### Retrieving Base Class Descriptors

- [Parsing USB Descriptors](parsing-usb-descriptors.md): Extract information from various USB descriptors using helper methods.
- [descriptorWithType:length:index:languageID:requestType:requestRecipient:error:](iousbhostobject/descriptorwithtype_length_index_languageid_requesttype_requestrecipient_error_.md): Retrieves a descriptor from the cache or the device.
- [descriptorWithType:length:error:](iousbhostobject/descriptorwithtype_length_error_.md): Retrieves a descriptor with default arguments from the cache or the device.
- [descriptorWithType:length:index:languageID:error:](iousbhostobject/descriptorwithtype_length_index_languageid_error_.md): Retrieves a string descriptor from the cache or the device.
- [stringWithIndex:languageID:error:](iousbhostobject/stringwithindex_languageid_error_.md): Retrieves a string from a string descriptor.
- [stringWithIndex:error:](iousbhostobject/stringwithindex_error_.md): Retrieves an English-language string from a string descriptor.

### Creating I/O Buffers

- [ioDataWithCapacity:error:](iousbhostobject/iodata%28withcapacity_%29.md): Allocates a buffer for input/output requests.

### Sending Device Requests

- [IOUSBHostDeviceRequestType](iousbhostdevicerequesttype%28______%29.md): Creates the request type field of a device request.
- [IOUSBHostDefaultControlCompletionTimeout](iousbhostdefaultcontrolcompletiontimeout.md): The default completion timeout for input/output requests.
- [sendDeviceRequest:data:bytesTransferred:completionTimeout:error:](iousbhostobject/senddevicerequest_data_bytestransferred_completiontimeout_error_.md): Sends a request on the default control endpoint.
- [sendDeviceRequest:data:bytesTransferred:error:](iousbhostobject/senddevicerequest_data_bytestransferred_error_.md): Sends a request on the default control endpoint with a default completion timeout.
- [sendDeviceRequest:error:](iousbhostobject/senddevicerequest_error_.md): Sends a request on the default control endpoint without a data phase and default completion timeout.

### Enqueueing Device Requests

- [IOUSBHostCompletionHandler](iousbhostcompletionhandler.md): The completion handler for asynchronous control, bulk, and interrupt transfers.
- [enqueueDeviceRequest:data:completionTimeout:error:completionHandler:](iousbhostobject/enqueuedevicerequest_data_completiontimeout_error_completionhandler_.md): Enqueues a request on the default control endpoint.
- [enqueueDeviceRequest:data:error:completionHandler:](iousbhostobject/enqueuedevicerequest_data_error_completionhandler_.md): Enqueues a request on the default control endpoint with a default completion timeout.
- [enqueueDeviceRequest:error:completionHandler:](iousbhostobject/enqueuedevicerequest_error_completionhandler_.md): Enqueues a request on the default control endpoint without a data phase and a default timeout.

### Aborting Device Requests

- [IOUSBHostAbortOption](iousbhostabortoption.md): Options for aborting pending input/output requests.
- [abortDeviceRequestsWithOption:error:](iousbhostobject/abortdevicerequestswithoption_error_.md): Aborts device requests.
- [abortDeviceRequestsWithError:](iousbhostobject/abortdevicerequestswitherror_.md): Aborts device requests synchronously.

### Getting Host Information

- [deviceAddress](iousbhostobject/deviceaddress.md): The device’s bus address.
- [frameNumberWithTime:](iousbhostobject/framenumberwithtime_.md): Returns the current frame number of the USB controller.

### Instance Properties

- [capabilityDescriptors](iousbhostobject/capabilitydescriptors.md)
- [deviceDescriptor](iousbhostobject/devicedescriptor.md)

### Instance Methods

- [configurationDescriptorWithIndex:error:](iousbhostobject/configurationdescriptor%28with_%29.md)
- [configurationDescriptorWithConfigurationValue:error:](iousbhostobject/configurationdescriptor%28withconfigurationvalue_%29.md)
- [currentMicroframeWithTime:error:](iousbhostobject/currentmicroframewithtime_error_.md)
- [dataWithCapacity:options:error:](iousbhostobject/data%28withcapacity_options_%29.md)
- [destroyWithOptions:](iousbhostobject/destroy%28options_%29.md)
- [referenceMicroframeWithTime:error:](iousbhostobject/referencemicroframewithtime_error_.md)

### Related Documentation

- [IOUSBHostDevice](iousbhostdevice.md): The class that claims and configures devices, retrieves descriptors, and sends device requests.
- [IOUSBHostInterface](iousbhostinterface.md): The class for accessing USB-related services.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [IOUSBHostDevice](iousbhostdevice.md)
- [IOUSBHostInterface](iousbhostinterface.md)

## See Also

### Base Classes

- [IOUSBHostIOSource](iousbhostiosource.md): This class provides basic functionality for deriving pipe and stream classes.
