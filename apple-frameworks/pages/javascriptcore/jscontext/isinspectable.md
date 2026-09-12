> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/isinspectable](https://developer.apple.com/documentation/javascriptcore/jscontext/isinspectable)

# isInspectable (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether you can inspect the JavaScript context with Safari Web Inspector.

## Declaration

```swift
var isInspectable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to `false`.

Set to `true` at any point in the context’s lifetime to allow Safari Web Inspector access to inspect the context. Then, select your context in Safari’s Develop menu for either your computer or an attached device to inspect it.

If you set this value to `false` during inspection, the system immediately closes Safari Web Inspector and does not provide any further information about the context.

For more information, see [Enabling the Inspection of Web Content in Apps](https://webkit.org/blog/13936/enabling-the-inspection-of-web-content-in-apps/).

## Topics

### Related Documentation

- [name](name.md): A descriptive name for the context.

# inspectable (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether you can inspect the JavaScript context with Safari Web Inspector.

## Declaration

```objectivec
@property (nonatomic, getter=isInspectable) BOOL inspectable;
```

<a id="Discussion"></a>

## Discussion

Defaults to `false`.

Set to `true` at any point in the context’s lifetime to allow Safari Web Inspector access to inspect the context. Then, select your context in Safari’s Develop menu for either your computer or an attached device to inspect it.

If you set this value to `false` during inspection, the system immediately closes Safari Web Inspector and does not provide any further information about the context.

For more information, see [Enabling the Inspection of Web Content in Apps](https://webkit.org/blog/13936/enabling-the-inspection-of-web-content-in-apps/).

## Topics

### Related Documentation

- [name](name.md): A descriptive name for the context.
