> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/content](https://developer.apple.com/documentation/appkit/nstreecontroller/content)

# content (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tree controller’s content object.

## Declaration

```swift
var content: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property can be an array of objects, or a single root object. The default value is `nil`. This property is observable using key-value observing.

# content (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tree controller’s content object.

## Declaration

```objectivec
@property (strong, nullable) id content;
```

<a id="Discussion"></a>

## Discussion

The value of this property can be an array of objects, or a single root object. The default value is `nil`. This property is observable using key-value observing.
