> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/valuetransformer/init(forname:)](https://developer.apple.com/documentation/foundation/valuetransformer/init(forname:))

# init(forName:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value transformer identified by a given identifier.

## Declaration

```swift
init?(forName name: NSValueTransformerName)
```

## Parameters

- `name`: The transformer identifier.

<a id="return-value"></a>

## Return Value

The value transformer identified by `name` in the shared registry, or `nil` if not found.

<a id="Discussion"></a>

## Discussion

If `valueTransformerForName:` does not find a registered transformer instance for `name`, it will attempt to find a class with the specified name. If a corresponding class is found an instance will be created and initialized using its `init:` method and then automatically registered with `name`.

## See Also

### Using the Name-Based Registry

- [setValueTransformer(\_:forName:)](setvaluetransformer%28__forname_%29.md): Registers the provided value transformer with a given identifier.
- [valueTransformerNames()](valuetransformernames%28%29.md): Returns an array of all the registered value transformers.
- [NSValueTransformerName](../nsvaluetransformername.md): Named value transformers defined by `NSValueTransformer`.

# valueTransformerForName: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value transformer identified by a given identifier.

## Declaration

```objectivec
+ (NSValueTransformer *) valueTransformerForName:(NSValueTransformerName) name;
```

## Parameters

- `name`: The transformer identifier.

<a id="return-value"></a>

## Return Value

The value transformer identified by `name` in the shared registry, or `nil` if not found.

<a id="Discussion"></a>

## Discussion

If `valueTransformerForName:` does not find a registered transformer instance for `name`, it will attempt to find a class with the specified name. If a corresponding class is found an instance will be created and initialized using its `init:` method and then automatically registered with `name`.

## See Also

### Using the Name-Based Registry

- [setValueTransformer:forName:](setvaluetransformer%28__forname_%29.md): Registers the provided value transformer with a given identifier.
- [valueTransformerNames](valuetransformernames%28%29.md): Returns an array of all the registered value transformers.
- [NSValueTransformerName](../nsvaluetransformername.md): Named value transformers defined by `NSValueTransformer`.
