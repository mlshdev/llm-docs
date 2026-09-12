> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslogicaltest/init(andtestwith:)](https://developer.apple.com/documentation/foundation/nslogicaltest/init(andtestwith:))

# init(andTestWith:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSLogicalTest` object initialized to perform an `AND` operation with the `NSSpecifierTest` objects in a given array.

## Declaration

```swift
init(andTestWith subTests: [NSSpecifierTest])
```

## Parameters

- `subTests`: An array of `NSSpecifierTest` objects representing Boolean expressions.

<a id="return-value"></a>

## Return Value

An `NSLogicalTest` object initialized to perform an `AND` operation with the `NSSpecifierTest` objects in `subTests`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Initializing a logical test

- [init(notTestWith:)](init%28nottestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform a `NOT` operation on the given `NSScriptWhoseTest` object.
- [init(orTestWith:)](init%28ortestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform an `OR` operation with the `NSSpecifierTest` objects in a given array.

# initAndTestWithTests: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSLogicalTest` object initialized to perform an `AND` operation with the `NSSpecifierTest` objects in a given array.

## Declaration

```objectivec
- (instancetype) initAndTestWithTests:(NSArray<NSSpecifierTest *> *) subTests;
```

## Parameters

- `subTests`: An array of `NSSpecifierTest` objects representing Boolean expressions.

<a id="return-value"></a>

## Return Value

An `NSLogicalTest` object initialized to perform an `AND` operation with the `NSSpecifierTest` objects in `subTests`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Initializing a logical test

- [initNotTestWithTest:](init%28nottestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform a `NOT` operation on the given `NSScriptWhoseTest` object.
- [initOrTestWithTests:](init%28ortestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform an `OR` operation with the `NSSpecifierTest` objects in a given array.
