> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/hidelementupdateresult/subscript(_:)-56db0](https://developer.apple.com/documentation/corehid/hiddeviceclient/hidelementupdateresult/subscript(_:)-56db0)

# subscript(\_:)

**Framework:** Core HID  
**Kind:** Instance Subscript  
**Availability:** macOS 15.0+

Receive the result of a element update.

## Declaration

```swift
subscript(originalRequest: HIDDeviceClient.ProvideElementUpdate) -> Result<Void, any Error>? { get }
```

## Parameters

- `originalRequest`: A request that was initially passed to [updateElements(\_:timeout:)](../updateelements%28__timeout_%29.md).

<a id="return-value"></a>

## Return Value

The result for the specified request that contain Void if successful; otherwise, an error if unsuccessful. Access the results using  [get()](https://developer.apple.com/documentation/swift/result/get%28%29).

<a id="overview"></a>

## Overview

For an example, see [updateElements(\_:timeout:)](../updateelements%28__timeout_%29.md).
