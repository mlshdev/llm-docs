> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistoryitem/alternatetitle](https://developer.apple.com/documentation/webkit/webhistoryitem/alternatetitle)

# alternateTitle (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

An alternate title that may be used in place of the receiver’s page title.

## Declaration

```swift
var alternateTitle: String! { get set }
```

<a id="Discussion"></a>

## Discussion

This method returns `nil` if no alternate title exists.

## See Also

### Getting and setting page titles

- [title](title.md): Deprecated. The receiver’s original page title.

# alternateTitle (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

An alternate title that may be used in place of the receiver’s page title.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * alternateTitle;
```

<a id="Discussion"></a>

## Discussion

This method returns `nil` if no alternate title exists.

## See Also

### Getting and setting page titles

- [title](title.md): Deprecated. The receiver’s original page title.
