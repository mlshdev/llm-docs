> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/errors](https://developer.apple.com/documentation/webkit/wkwebextension/errors)

# errors (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An array of all errors that occurred during the processing of the extension.

## Declaration

```swift
var errors: [any Error] { get }
```

<a id="discussion"></a>

## Discussion

Provides an array of all parse-time errors for the extension, with repeat errors consolidated into a single entry for the original occurrence only. If no errors occurred, an empty array is returned.

> **Note**

> Once the extension is loaded, use the [errors](errors.md) property on an extension context to monitor any runtime errors, as they can occur after the extension is loaded.

# errors (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An array of all errors that occurred during the processing of the extension.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSError *> * errors;
```

<a id="discussion"></a>

## Discussion

Provides an array of all parse-time errors for the extension, with repeat errors consolidated into a single entry for the original occurrence only. If no errors occurred, an empty array is returned.

> **Note**

> Once the extension is loaded, use the [errors](errors.md) property on an extension context to monitor any runtime errors, as they can occur after the extension is loaded.
