> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/hidelementupdateresult/subscript(_:)-7mvq2](https://developer.apple.com/documentation/corehid/hiddeviceclient/hidelementupdateresult/subscript(_:)-7mvq2)

# subscript(\_:)

**Framework:** Core HID  
**Kind:** Instance Subscript  
**Availability:** macOS 15.0+

Receive the result of a request element update.

## Declaration

```swift
subscript(originalRequest: HIDDeviceClient.RequestElementUpdate) -> Result<[HIDElement.Value], any Error>? { get }
```

## Parameters

- `originalRequest`: A request that was initially passed to [updateElements(\_:timeout:)](../updateelements%28__timeout_%29.md).

<a id="return-value"></a>

## Return Value

The result for the specified request which contains a list of updated [HIDElement.Value](../../hidelement/value.md) objects. Access the results using  [get()](https://developer.apple.com/documentation/swift/result/get%28%29).

<a id="overview"></a>

## Overview

For an example, see [updateElements(\_:timeout:)](../updateelements%28__timeout_%29.md).
