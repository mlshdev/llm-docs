> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit](https://developer.apple.com/documentation/networkingdriverkit)

# NetworkingDriverKit

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Framework  
**Availability:** DriverKit 19.0+

Develop drivers for Ethernet networking devices.

<a id="overview"></a>

## Overview

Use NetworkingDriverKit to develop drivers for USB Ethernet adapters. This framework extends the API of [DriverKit](driverkit.md), providing you with a service class for managing your networking driver. It also provides support for managing the memory you use to store packets, transferring those packets between the device and networking stack, and inspecting the Ethernet link status.

Note that Ethernet is the only networking interface currently supported by NetworkingDriverKit.

Develop your driver with DriverKit and NetworkingDriverKit. Use USBDriverKit to manage the connection to your hardware device. Include your driver inside your macOS app and use the [System Extensions](https://developer.apple.com/documentation/systemextensions) framework to install and upgrade the driver on the user’s Mac.

> **Note**

>  NetworkingDriverKit is available on macOS.

## Topics

### Essentials

- [com.apple.developer.driverkit.family.networking](bundleresources/entitlements/com.apple.developer.driverkit.family.networking.md): A Boolean value that indicates whether to match the driver against devices that communicate using networking protocols.

### Samples

- [Connecting a network driver](pcidriverkit/connecting-a-network-driver.md): Create an Ethernet driver that interfaces with the system’s network protocol stack.
- [DriverKit sample code](driverkit/driverkit-sample-code.md): Explore projects that demonstrate how to write macOS device drivers with the DriverKit family of frameworks.

### Network Service

- [IOUserNetworkEthernet](networkingdriverkit/iousernetworkethernet.md): The object you use to manage the setup, configuration, and teardown of your networking driver.

### Packet Management

- [IOUserNetworkPacketBufferPool](networkingdriverkit/iousernetworkpacketbufferpool.md): An object that manages the storage space for packets coming into and out of your driver.
- [IOUserNetworkPacket](networkingdriverkit/iousernetworkpacket.md): A network packet containing the data for your driver to process.
- [IOUserNetworkPacketDirection](networkingdriverkit/iousernetworkpacketdirection.md): The direction in which the packet moves, relative to the device.

### Packet Queues

- [IOUserNetworkRxSubmissionQueue](networkingdriverkit/iousernetworkrxsubmissionqueue.md): The queue that receives packets from the device.
- [IOUserNetworkRxCompletionQueue](networkingdriverkit/iousernetworkrxcompletionqueue.md): The queue you use to store packets that you successfully transferred to the networking stack.
- [IOUserNetworkTxSubmissionQueue](networkingdriverkit/iousernetworktxsubmissionqueue.md): The queue that receives packets from the networking stack.
- [IOUserNetworkTxCompletionQueue](networkingdriverkit/iousernetworktxcompletionqueue.md): The queue you use to store packets that you successfully transferred to the device.
- [IOUserNetworkPacketQueue](networkingdriverkit/iousernetworkpacketqueue.md): The base class for the queues that manage the packets moving to and from your device.

### Reference

- [NetworkingDriverKit Structures](networkingdriverkit/networkingdriverkit-structures.md)
- [NetworkingDriverKit Data Types](networkingdriverkit/networkingdriverkit-data-types.md)
- [NetworkingDriverKit Constants](networkingdriverkit/networkingdriverkit-constants.md)

### Classes

- [IOUserNetworkPacketPoller](networkingdriverkit/iousernetworkpacketpoller.md)
- [IOUserNetworkPacketQueueCompat](networkingdriverkit/iousernetworkpacketqueuecompat.md)
- [IOUserNetworkRxCompletionQueueCompat](networkingdriverkit/iousernetworkrxcompletionqueuecompat.md)
- [IOUserNetworkRxSubmissionQueueCompat](networkingdriverkit/iousernetworkrxsubmissionqueuecompat.md)
- [IOUserNetworkTxCompletionQueueCompat](networkingdriverkit/iousernetworktxcompletionqueuecompat.md)
- [IOUserNetworkTxSubmissionQueueCompat](networkingdriverkit/iousernetworktxsubmissionqueuecompat.md)

### Structures

- [IOUserNetworkEthernet_IVars](networkingdriverkit/iousernetworkethernet_ivars.md)
- [IOUserNetworkPacketQueueCompat_IVars](networkingdriverkit/iousernetworkpacketqueuecompat_ivars.md)
- [IOUserNetworkRxCompletionQueueCompat_IVars](networkingdriverkit/iousernetworkrxcompletionqueuecompat_ivars.md)
- [IOUserNetworkRxSubmissionQueueCompat_IVars](networkingdriverkit/iousernetworkrxsubmissionqueuecompat_ivars.md)
- [IOUserNetworkTxCompletionQueueCompat_IVars](networkingdriverkit/iousernetworktxcompletionqueuecompat_ivars.md)
- [IOUserNetworkTxSubmissionQueueCompat_IVars](networkingdriverkit/iousernetworktxsubmissionqueuecompat_ivars.md)

### Macros

- [NDK_25](networkingdriverkit/ndk_25.md)

### Enumeration Cases

- [kIOUserNetworkHWAssistLRONumSeg](networkingdriverkit/kiousernetworkhwassistlronumseg.md)

### Type Aliases

- [DequeueActionCompat](networkingdriverkit/dequeueactioncompat.md)
- [EnqueueActionCompat](networkingdriverkit/enqueueactioncompat.md)
- [IOUserNetworkPacketQueueCompatId](networkingdriverkit/iousernetworkpacketqueuecompatid.md)
- [QueryFreeSpaceActionCompat](networkingdriverkit/queryfreespaceactioncompat.md)
