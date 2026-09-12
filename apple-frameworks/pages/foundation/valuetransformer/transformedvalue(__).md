> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/valuetransformer/transformedvalue(_:)](https://developer.apple.com/documentation/foundation/valuetransformer/transformedvalue(_:))

# transformedValue(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result of transforming a given value.

## Declaration

```swift
func transformedValue(_ value: Any?) -> Any?
```

## Parameters

- `value`: The value to transform.

<a id="return-value"></a>

## Return Value

The result of transforming `value`.

The default implementation simply returns `value`.

<a id="discussion"></a>

## Discussion

A subclass should override this method to transform and return an object based on `value`.

## See Also

### Transforming Values

- [reverseTransformedValue(\_:)](reversetransformedvalue%28__%29.md): Returns the result of the reverse transformation of a given value.

# transformedValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result of transforming a given value.

## Declaration

```objectivec
- (id) transformedValue:(id) value;
```

## Parameters

- `value`: The value to transform.

<a id="return-value"></a>

## Return Value

The result of transforming `value`.

The default implementation simply returns `value`.

<a id="discussion"></a>

## Discussion

A subclass should override this method to transform and return an object based on `value`.

## See Also

### Transforming Values

- [reverseTransformedValue:](reversetransformedvalue%28__%29.md): Returns the result of the reverse transformation of a given value.
