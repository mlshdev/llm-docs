> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlattributedescriptorarray/subscript(_:)](https://developer.apple.com/documentation/metal/mtlattributedescriptorarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns the state of the specified attribute.

## Declaration

```swift
subscript(index: Int) -> MTLAttributeDescriptor! { get set }
```

## Parameters

- `index`: A specified index in the argument table bindings.

<a id="return-value"></a>

## Return Value

The attribute descriptor for data bound at this index.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns the state of the specified attribute.

## Declaration

```objectivec
- (MTLAttributeDescriptor *) objectAtIndexedSubscript:(NSUInteger) index;
```

## Parameters

- `index`: A specified index in the argument table bindings.

<a id="return-value"></a>

## Return Value

The attribute descriptor for data bound at this index.

## See Also

### Accessing attribute state objects

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Sets state for the specified attribute.
