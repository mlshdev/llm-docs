> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslogicaltest/init(ortestwith:)](https://developer.apple.com/documentation/foundation/nslogicaltest/init(ortestwith:))

# init(orTestWith:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSLogicalTest` object initialized to perform an `OR` operation with the `NSSpecifierTest` objects in a given array.

## Declaration

```swift
init(orTestWith subTests: [NSSpecifierTest])
```

## Parameters

- `subTests`: An array of `NSSpecifierTest` objects representing Boolean expressions.

<a id="return-value"></a>

## Return Value

An `NSLogicalTest` object initialized to perform an `OR` operation with the `NSSpecifierTest` objects in `subTests`.

## See Also

### Initializing a logical test

- [init(andTestWith:)](init%28andtestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform an `AND` operation with the `NSSpecifierTest` objects in a given array.
- [init(notTestWith:)](init%28nottestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform a `NOT` operation on the given `NSScriptWhoseTest` object.

# initOrTestWithTests: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSLogicalTest` object initialized to perform an `OR` operation with the `NSSpecifierTest` objects in a given array.

## Declaration

```objectivec
- (instancetype) initOrTestWithTests:(NSArray<NSSpecifierTest *> *) subTests;
```

## Parameters

- `subTests`: An array of `NSSpecifierTest` objects representing Boolean expressions.

<a id="return-value"></a>

## Return Value

An `NSLogicalTest` object initialized to perform an `OR` operation with the `NSSpecifierTest` objects in `subTests`.

## See Also

### Initializing a logical test

- [initAndTestWithTests:](init%28andtestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform an `AND` operation with the `NSSpecifierTest` objects in a given array.
- [initNotTestWithTest:](init%28nottestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform a `NOT` operation on the given `NSScriptWhoseTest` object.
