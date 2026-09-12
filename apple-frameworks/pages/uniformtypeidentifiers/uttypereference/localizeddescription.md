> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypereference/localizeddescription](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypereference/localizeddescription)

# localizedDescription (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A localized description of the type.

## Declaration

```swift
var localizedDescription: String? { get }
```

<a id="Discussion"></a>

## Discussion

If the type doesn’t provide a description, the system searches its supertypes. A dynamic type doesn’t have localized description, even if its supertypes do.

# localizedDescription (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A localized description of the type.

## Declaration

```objectivec
@property (readonly, nullable) NSString * localizedDescription;
```

<a id="Discussion"></a>

## Discussion

If the type doesn’t provide a description, the system searches its supertypes. A dynamic type doesn’t have localized description, even if its supertypes do.
