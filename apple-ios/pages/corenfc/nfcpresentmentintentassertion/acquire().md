> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcpresentmentintentassertion/acquire()](https://developer.apple.com/documentation/corenfc/nfcpresentmentintentassertion/acquire())

# acquire()

**Framework:** Core NFC  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Acquire a presentment intent assertion instance from the system.

## Declaration

```swift
static func acquire() async throws -> NFCPresentmentIntentAssertion
```

<a id="return-value"></a>

## Return Value

A presentment intent assertion instance you use to prevent the default contactless app from launching.

<a id="Discussion"></a>

## Discussion

The returned object remains valid until any of the following occur:

- Your app goes into the background.
- The maximum presentment intent assertion duration expires.
- The object deinitializes.

If the system can’t create a presentment intent assertion object, this method throws an error of type [NFCPresentmentIntentAssertion.Error](error.md).

> **Warning**

>  Check to see if the device is capable of using NFC with the [NFCReaderSession](../nfcreadersession-swift.class.md) class property [readingAvailable](../nfcreadersession-swift.class/readingavailable.md). Attempting to acquire a presentment intent assertion on a device that can’t use NFC raises [fatalError(\_:file:line:)](https://developer.apple.com/documentation/swift/fatalerror%28_:file:line:%29).
