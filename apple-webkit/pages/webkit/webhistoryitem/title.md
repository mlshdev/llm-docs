> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistoryitem/title](https://developer.apple.com/documentation/webkit/webhistoryitem/title)

# title (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s original page title.

## Declaration

```swift
var title: String! { get }
```

<a id="Discussion"></a>

## Discussion

The title returned comes from the title HTML tag for HTML documents.

## See Also

### Getting and setting page titles

- [alternateTitle](alternatetitle.md): Deprecated. An alternate title that may be used in place of the receiver’s page title.

# title (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The receiver’s original page title.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * title;
```

<a id="Discussion"></a>

## Discussion

The title returned comes from the title HTML tag for HTML documents.

## See Also

### Getting and setting page titles

- [alternateTitle](alternatetitle.md): Deprecated. An alternate title that may be used in place of the receiver’s page title.
