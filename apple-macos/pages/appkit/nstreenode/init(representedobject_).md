> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstreenode/init(representedobject:)

# init(representedObject:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes a newly allocated tree node that represents the specified object.

## Declaration

```swift
init(representedObject modelObject: Any?)
```

## Parameters

- `modelObject`: The object the tree node represents.

<a id="return-value"></a>

## Return Value

An initialized tree node that represents `modelObject`.

# initWithRepresentedObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes a newly allocated tree node that represents the specified object.

## Declaration

```objectivec
- (instancetype) initWithRepresentedObject:(id) modelObject;
```

## Parameters

- `modelObject`: The object the tree node represents.

<a id="return-value"></a>

## Return Value

An initialized tree node that represents `modelObject`.

## See Also

### Creating tree nodes

- [treeNodeWithRepresentedObject:](treenodewithrepresentedobject_.md): Creates and returns a tree node that represents the specified object.
