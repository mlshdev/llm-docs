> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/coercevalue(_:forkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/coercevalue(_:forkey:))

# coerceValue(\_:forKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Uses type info from the class description and `NSScriptCoercionHandler` to attempt to convert `value` for `key` to the proper type, if necessary.

## Declaration

```swift
func coerceValue(_ value: Any?, forKey key: String) -> Any?
```

<a id="Discussion"></a>

## Discussion

The method `coerceValueFor<Key>:` is used if it exists.

# coerceValue:forKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS

Uses type info from the class description and `NSScriptCoercionHandler` to attempt to convert `value` for `key` to the proper type, if necessary.

## Declaration

```objectivec
- (id) coerceValue:(id) value forKey:(NSString *) key;
```

<a id="Discussion"></a>

## Discussion

The method `coerceValueFor<Key>:` is used if it exists.
