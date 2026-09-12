> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroup/setdistributionidentifier(_:forproperty:person:)](https://developer.apple.com/documentation/addressbook/abgroup/setdistributionidentifier(_:forproperty:person:))

# setDistributionIdentifier(\_:forProperty:person:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Assigns a specific distribution identifier for a person’s multivalue list property so that the group can be used as a distribution list.

## Declaration

```swift
func setDistributionIdentifier(_ identifier: String!, forProperty property: String!, person: ABPerson!) -> Bool
```

## Parameters

- `identifier`: The identifier to be set as the distribution identifier
- `property`: The property whose distribution identifier will be set.
- `person`: The person whose distribution identifier will be.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default distribution identifier is a multivalue list’s primary identifier. If `person` is `nil`, this method raises an exception.

Distribution identifiers let you use groups as distribution lists, by indicating which value in a multivalue property should be used when addressing the group. See [Address Book Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/AddressBook.html#//apple_ref/doc/uid/10000117i) for more detailed discussion.

## See Also

### Managing Distribution Lists

- [distributionIdentifier(forProperty:person:)](distributionidentifier%28forproperty_person_%29.md): Returns the distribution identifier for the given property and person.

# setDistributionIdentifier:forProperty:person: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Assigns a specific distribution identifier for a person’s multivalue list property so that the group can be used as a distribution list.

## Declaration

```objectivec
- (BOOL) setDistributionIdentifier:(NSString *) identifier forProperty:(NSString *) property person:(ABPerson *) person;
```

## Parameters

- `identifier`: The identifier to be set as the distribution identifier
- `property`: The property whose distribution identifier will be set.
- `person`: The person whose distribution identifier will be.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The default distribution identifier is a multivalue list’s primary identifier. If `person` is `nil`, this method raises an exception.

Distribution identifiers let you use groups as distribution lists, by indicating which value in a multivalue property should be used when addressing the group. See [Address Book Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/AddressBook.html#//apple_ref/doc/uid/10000117i) for more detailed discussion.

## See Also

### Managing Distribution Lists

- [distributionIdentifierForProperty:person:](distributionidentifier%28forproperty_person_%29.md): Returns the distribution identifier for the given property and person.
