> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugin/setserializedvalue(_:forkey:)](https://developer.apple.com/documentation/quartz/qcplugin/setserializedvalue(_:forkey:))

# setSerializedValue(\_:forKey:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Provides custom deserialization for patch internal settings that were previously serialized using the method [serializedValue(forKey:)](serializedvalue%28forkey_%29.md).

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func setSerializedValue(_ serializedValue: Any!, forKey key: String!)
```

## Parameters

- `serializedValue`: The value to deserialize.
- `key`: The key for the value to deserialize.

<a id="Discussion"></a>

## Discussion

If your patch has internal settings that do not conform to the [NSCoding](https://developer.apple.com/documentation/foundation/nscoding) protocol, you must implement this method. After you deserialize the value, you need to call  `[self set:value forKey:key]` to set the corresponding internal setting of the custom patch instance to the deserialized value.

## See Also

### Supporting Saving and Retrieving Internal Settings

- [serializedValue(forKey:)](serializedvalue%28forkey_%29.md): Deprecated. A method implemented to override serialization.

# setSerializedValue:forKey: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Provides custom deserialization for patch internal settings that were previously serialized using the method [serializedValueForKey:](serializedvalue%28forkey_%29.md).

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) setSerializedValue:(id) serializedValue forKey:(NSString *) key;
```

## Parameters

- `serializedValue`: The value to deserialize.
- `key`: The key for the value to deserialize.

<a id="Discussion"></a>

## Discussion

If your patch has internal settings that do not conform to the [NSCoding](https://developer.apple.com/documentation/foundation/nscoding) protocol, you must implement this method. After you deserialize the value, you need to call  `[self set:value forKey:key]` to set the corresponding internal setting of the custom patch instance to the deserialized value.

## See Also

### Supporting Saving and Retrieving Internal Settings

- [serializedValueForKey:](serializedvalue%28forkey_%29.md): Deprecated. A method implemented to override serialization.
