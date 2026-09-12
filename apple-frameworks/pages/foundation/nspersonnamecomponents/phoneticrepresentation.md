> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspersonnamecomponents/phoneticrepresentation](https://developer.apple.com/documentation/foundation/nspersonnamecomponents/phoneticrepresentation)

# phoneticRepresentation (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The phonetic representation name components of the receiver.

## Declaration

```swift
var phoneticRepresentation: PersonNameComponents? { get set }
```

<a id="Discussion"></a>

## Discussion

Each component of the receiver with a value should have a corresponding value for any value set for this property. `nil` by default.

The `phoneticRepresentation` property value of this property value is ignored.

## See Also

### Accessing Person Name Components

- [namePrefix](nameprefix.md): The portion of a name’s full form of address that precedes the name itself *(for example, “Dr.,” “Mr.,” “Ms.”)*.
- [givenName](givenname.md): Name bestowed upon an individual to differentiate them from other members of a group that share a family name *(for example, “Johnathan”)*.
- [middleName](middlename.md): Secondary name bestowed upon an individual to differentiate them from others that have the same given name *(for example, “Maple”)*.
- [familyName](familyname.md): Name bestowed upon an individual to denote membership in a group or family. *(for example, “Appleseed”)*.
- [nameSuffix](namesuffix.md): The portion of a name’s full form of address that follows the name itself *(for example, “Esq.,” “Jr.,” “Ph.D.”)*.
- [nickname](nickname.md): Name substituted for the purposes of familiarity *(for example, “Johnny”)*.

# phoneticRepresentation (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The phonetic representation name components of the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSPersonNameComponents * phoneticRepresentation;
```

<a id="Discussion"></a>

## Discussion

Each component of the receiver with a value should have a corresponding value for any value set for this property. `nil` by default.

The `phoneticRepresentation` property value of this property value is ignored.

## See Also

### Accessing Person Name Components

- [namePrefix](nameprefix.md): The portion of a name’s full form of address that precedes the name itself *(for example, “Dr.,” “Mr.,” “Ms.”)*.
- [givenName](givenname.md): Name bestowed upon an individual to differentiate them from other members of a group that share a family name *(for example, “Johnathan”)*.
- [middleName](middlename.md): Secondary name bestowed upon an individual to differentiate them from others that have the same given name *(for example, “Maple”)*.
- [familyName](familyname.md): Name bestowed upon an individual to denote membership in a group or family. *(for example, “Appleseed”)*.
- [nameSuffix](namesuffix.md): The portion of a name’s full form of address that follows the name itself *(for example, “Esq.,” “Jr.,” “Ph.D.”)*.
- [nickname](nickname.md): Name substituted for the purposes of familiarity *(for example, “Johnny”)*.
