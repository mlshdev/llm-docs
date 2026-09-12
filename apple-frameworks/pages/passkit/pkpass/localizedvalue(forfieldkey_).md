> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass/localizedvalue(forfieldkey:)](https://developer.apple.com/documentation/passkit/pkpass/localizedvalue(forfieldkey:))

# localizedValue(forFieldKey:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns the localized value for a specified field of the pass.

## Declaration

```swift
func localizedValue(forFieldKey key: String) -> Any?
```

## Parameters

- `key`: The field’s key as specified in the pass.

<a id="return-value"></a>

## Return Value

The localized value for the pass’s field.

<a id="Discussion"></a>

## Discussion

If your app works with passes from arbitrary sources, such as an email client, it can’t use this method because PassKit doesn’t know the keys for those passes in advance. Use the other properties of this class, such as [organizationName](organizationname.md), instead.

## See Also

### Getting the display attributes

- [icon](icon.md): The pass icon.
- [organizationName](organizationname.md): The name of the organization that creates the pass.
- [relevantDate](relevantdate.md): Deprecated. The date when the pass is most likely to be useful or necessary.
- [PKPassRelevantDate](../pkpassrelevantdate.md)

# localizedValueForFieldKey: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns the localized value for a specified field of the pass.

## Declaration

```objectivec
- (id) localizedValueForFieldKey:(NSString *) key;
```

## Parameters

- `key`: The field’s key as specified in the pass.

<a id="return-value"></a>

## Return Value

The localized value for the pass’s field.

<a id="Discussion"></a>

## Discussion

If your app works with passes from arbitrary sources, such as an email client, it can’t use this method because PassKit doesn’t know the keys for those passes in advance. Use the other properties of this class, such as [organizationName](organizationname.md), instead.

## See Also

### Getting the display attributes

- [icon](icon.md): The pass icon.
- [organizationName](organizationname.md): The name of the organization that creates the pass.
- [relevantDate](relevantdate.md): Deprecated. The date when the pass is most likely to be useful or necessary.
- [PKPassRelevantDate](../pkpassrelevantdate.md)
