> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreecontroller/sortdescriptors](https://developer.apple.com/documentation/appkit/nstreecontroller/sortdescriptors)

# sortDescriptors (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing the sort descriptors used to arrange the tree controller’s content.

## Declaration

```swift
var sortDescriptors: [NSSortDescriptor] { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is an empty array, the tree controller has no sort descriptors configured, which means that the contents are arranged in their natural order. This property is observable using key-value observing.

## See Also

### Related Documentation

- [Cocoa Bindings](../cocoa-bindings.md): Automatically synchronize your data model with your app’s interface using Cocoa Bindings.

# sortDescriptors (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing the sort descriptors used to arrange the tree controller’s content.

## Declaration

```objectivec
@property (copy) NSArray<NSSortDescriptor *> * sortDescriptors;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is an empty array, the tree controller has no sort descriptors configured, which means that the contents are arranged in their natural order. This property is observable using key-value observing.

## See Also

### Related Documentation

- [Cocoa Bindings](../cocoa-bindings.md): Automatically synchronize your data model with your app’s interface using Cocoa Bindings.
