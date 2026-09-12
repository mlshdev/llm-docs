> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewdatatype](https://developer.apple.com/documentation/webkit/wkwebviewdatatype)

# WKWebViewDataType (Swift)

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
struct WKWebViewDataType
```

## Topics

### Initializers

- [init(rawValue:)](wkwebviewdatatype/init%28rawvalue_%29.md)

### Type Properties

- [sessionStorage](wkwebviewdatatype/sessionstorage.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Saving and restoring data

- [fetchData(of:completionHandler:)](wkwebview/fetchdata%28of_completionhandler_%29.md)
- [restoreData(\_:completionHandler:)](wkwebview/restoredata%28__completionhandler_%29.md)

# WKWebViewDataType (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
enum WKWebViewDataType : NSUInteger;
```

## Topics

### Enumeration Cases

- [WKWebViewDataTypeSessionStorage](wkwebviewdatatype/sessionstorage.md)

## See Also

### Saving and restoring data

- [fetchDataOfTypes:completionHandler:](wkwebview/fetchdata%28of_completionhandler_%29.md)
- [restoreData:completionHandler:](wkwebview/restoredata%28__completionhandler_%29.md)
