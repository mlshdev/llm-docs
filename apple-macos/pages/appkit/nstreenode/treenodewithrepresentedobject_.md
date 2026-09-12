> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreenode/treenodewithrepresentedobject:](https://developer.apple.com/documentation/appkit/nstreenode/treenodewithrepresentedobject:)

# treeNodeWithRepresentedObject:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Creates and returns a tree node that represents the specified object.

## Declaration

```objectivec
+ (instancetype) treeNodeWithRepresentedObject:(id) modelObject;
```

## Parameters

- `modelObject`: The object the tree node represents.

<a id="return-value"></a>

## Return Value

An initialized tree node that represents `modelObject`.

## See Also

### Related Documentation

- [Cocoa Bindings](../cocoa-bindings.md): Automatically synchronize your data model with your app’s interface using Cocoa Bindings.

### Creating tree nodes

- [initWithRepresentedObject:](init%28representedobject_%29.md): Initializes a newly allocated tree node that represents the specified object.
