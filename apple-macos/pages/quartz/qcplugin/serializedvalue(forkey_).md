> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/serializedvalue(forkey:)](https://developer.apple.com/documentation/quartz/qcplugin/serializedvalue(forkey:))

# serializedValue(forKey:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

A method implemented to override serialization.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func serializedValue(forKey key: String!) -> Any!
```

## Parameters

- `key`: The key for the value to retrieve.

<a id="return-value"></a>

## Return Value

Either `nil` or a value that’s compliant with property lists:  `NSString`, `NSNumber`, `NSDate`, `NSData`, `NSArray`, or `NSDictionary`.

<a id="discussion"></a>

## Discussion

Provides custom serialization for patch internal settings that do not comply to the [NSCoding](https://developer.apple.com/documentation/foundation/nscoding) protocol.

<a id="Discussion"></a>

## Discussion

If your patch has internal settings that do not conform to the [NSCoding](https://developer.apple.com/documentation/foundation/nscoding) protocol, you must implement this method.

## See Also

### Supporting Saving and Retrieving Internal Settings

- [setSerializedValue(\_:forKey:)](setserializedvalue%28__forkey_%29.md): Deprecated. Provides custom deserialization for patch internal settings that were previously serialized using the method [serializedValue(forKey:)](serializedvalue%28forkey_%29.md).

# serializedValueForKey: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

A method implemented to override serialization.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) serializedValueForKey:(NSString *) key;
```

## Parameters

- `key`: The key for the value to retrieve.

<a id="return-value"></a>

## Return Value

Either `nil` or a value that’s compliant with property lists:  `NSString`, `NSNumber`, `NSDate`, `NSData`, `NSArray`, or `NSDictionary`.

<a id="discussion"></a>

## Discussion

Provides custom serialization for patch internal settings that do not comply to the [NSCoding](https://developer.apple.com/documentation/foundation/nscoding) protocol.

<a id="Discussion"></a>

## Discussion

If your patch has internal settings that do not conform to the [NSCoding](https://developer.apple.com/documentation/foundation/nscoding) protocol, you must implement this method.

## See Also

### Supporting Saving and Retrieving Internal Settings

- [setSerializedValue:forKey:](setserializedvalue%28__forkey_%29.md): Deprecated. Provides custom deserialization for patch internal settings that were previously serialized using the method [serializedValueForKey:](serializedvalue%28forkey_%29.md).
