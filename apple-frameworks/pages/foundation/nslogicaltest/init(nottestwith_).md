> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslogicaltest/init(nottestwith:)](https://developer.apple.com/documentation/foundation/nslogicaltest/init(nottestwith:))

# init(notTestWith:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSLogicalTest` object initialized to perform a `NOT` operation on the given `NSScriptWhoseTest` object.

## Declaration

```swift
init(notTestWith subTest: NSScriptWhoseTest)
```

## Parameters

- `subTest`: The `NSScriptWhoseTest` object to invert.

<a id="return-value"></a>

## Return Value

An `NSLogicalTest` object initialized to perform a `NOT` operation on `subTest`.

## See Also

### Initializing a logical test

- [init(andTestWith:)](init%28andtestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform an `AND` operation with the `NSSpecifierTest` objects in a given array.
- [init(orTestWith:)](init%28ortestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform an `OR` operation with the `NSSpecifierTest` objects in a given array.

# initNotTestWithTest: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSLogicalTest` object initialized to perform a `NOT` operation on the given `NSScriptWhoseTest` object.

## Declaration

```objectivec
- (instancetype) initNotTestWithTest:(NSScriptWhoseTest *) subTest;
```

## Parameters

- `subTest`: The `NSScriptWhoseTest` object to invert.

<a id="return-value"></a>

## Return Value

An `NSLogicalTest` object initialized to perform a `NOT` operation on `subTest`.

## See Also

### Initializing a logical test

- [initAndTestWithTests:](init%28andtestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform an `AND` operation with the `NSSpecifierTest` objects in a given array.
- [initOrTestWithTests:](init%28ortestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform an `OR` operation with the `NSSpecifierTest` objects in a given array.
