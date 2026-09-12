> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroup/distributionidentifier(forproperty:person:)](https://developer.apple.com/documentation/addressbook/abgroup/distributionidentifier(forproperty:person:))

# distributionIdentifier(forProperty:person:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the distribution identifier for the given property and person.

## Declaration

```swift
func distributionIdentifier(forProperty property: String!, person: ABPerson!) -> String!
```

## Parameters

- `property`: The property whose distribution identifier will be returned.
- `person`: The person whose distribution identifier will be returned.

<a id="return-value"></a>

## Return Value

The distribution identifier for the given property and person.

<a id="Discussion"></a>

## Discussion

If a distribution identifier is not set, this method returns the multivalue’s primary identifier. If either the `property` or the `person` argument is `nil`, this method returns `nil`. This method also returns `nil` if `property` is not a multivalue list property, or if `person` is not a member of the group.

Distribution identifiers let you use groups as distribution lists, by indicating which value in a multivalue property should be used when addressing the group. See [Using Address Book Groups as Distribution Lists](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/CreatingMailingLists.html#//apple_ref/doc/uid/20001025) for more detailed discussion.

## See Also

### Managing Distribution Lists

- [setDistributionIdentifier(\_:forProperty:person:)](setdistributionidentifier%28__forproperty_person_%29.md): Assigns a specific distribution identifier for a person’s multivalue list property so that the group can be used as a distribution list.

# distributionIdentifierForProperty:person: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the distribution identifier for the given property and person.

## Declaration

```objectivec
- (NSString *) distributionIdentifierForProperty:(NSString *) property person:(ABPerson *) person;
```

## Parameters

- `property`: The property whose distribution identifier will be returned.
- `person`: The person whose distribution identifier will be returned.

<a id="return-value"></a>

## Return Value

The distribution identifier for the given property and person.

<a id="Discussion"></a>

## Discussion

If a distribution identifier is not set, this method returns the multivalue’s primary identifier. If either the `property` or the `person` argument is `nil`, this method returns `nil`. This method also returns `nil` if `property` is not a multivalue list property, or if `person` is not a member of the group.

Distribution identifiers let you use groups as distribution lists, by indicating which value in a multivalue property should be used when addressing the group. See [Using Address Book Groups as Distribution Lists](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/CreatingMailingLists.html#//apple_ref/doc/uid/20001025) for more detailed discussion.

## See Also

### Managing Distribution Lists

- [setDistributionIdentifier:forProperty:person:](setdistributionidentifier%28__forproperty_person_%29.md): Assigns a specific distribution identifier for a person’s multivalue list property so that the group can be used as a distribution list.
