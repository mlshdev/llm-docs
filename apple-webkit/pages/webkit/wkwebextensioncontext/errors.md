> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/errors](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/errors)

# errors (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

All errors that occurred in the extension context.

## Declaration

```swift
var errors: [any Error] { get }
```

<a id="discussion"></a>

## Discussion

Provides an array of all parse-time and runtime errors for the extension and extension context, with repeat errors consolidated into a single entry for the original occurrence. If no errors occurred, an empty array is returned.

# errors (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

All errors that occurred in the extension context.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSError *> * errors;
```

<a id="discussion"></a>

## Discussion

Provides an array of all parse-time and runtime errors for the extension and extension context, with repeat errors consolidated into a single entry for the original occurrence. If no errors occurred, an empty array is returned.
