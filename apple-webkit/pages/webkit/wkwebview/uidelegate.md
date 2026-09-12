> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/uidelegate](https://developer.apple.com/documentation/webkit/wkwebview/uidelegate)

# uiDelegate (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The object you use to integrate custom user interface elements, such as contextual menus or panels, into web view interactions.

## Declaration

```swift
weak var uiDelegate: (any WKUIDelegate)? { get set }
```

## See Also

### Displaying native user interface elements

- [WKUIDelegate](../wkuidelegate.md): The methods for presenting native user interface elements on behalf of a webpage.

# UIDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The object you use to integrate custom user interface elements, such as contextual menus or panels, into web view interactions.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<WKUIDelegate> UIDelegate;
```

## See Also

### Displaying native user interface elements

- [WKUIDelegate](../wkuidelegate.md): The methods for presenting native user interface elements on behalf of a webpage.
