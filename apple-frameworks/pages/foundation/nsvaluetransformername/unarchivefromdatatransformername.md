> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvaluetransformername/unarchivefromdatatransformername](https://developer.apple.com/documentation/foundation/nsvaluetransformername/unarchivefromdatatransformername)

# unarchiveFromDataTransformerName (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ (deprecated in 12.0) · iPadOS 3.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

The name of the value transformer that attempts to unarchive data from an object you provide.

> Use [secureUnarchiveFromDataTransformerName](secureunarchivefromdatatransformername.md) instead.

## Declaration

```swift
static let unarchiveFromDataTransformerName: NSValueTransformerName
```

<a id="Discussion"></a>

## Discussion

The transformer this property references returns the [NSData](../nsdata.md) instance created by archiving the value. This transformer requires that an object supports [NSCoding](../nscoding.md) in order for the transformer to archive and unarchive.

## See Also

### Type Properties

- [isNilTransformerName](isniltransformername.md): This value transformer returns true if the value is nil.
- [isNotNilTransformerName](isnotniltransformername.md): This value transformer returns true if the value is non-nil.
- [keyedUnarchiveFromDataTransformerName](keyedunarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data stored inside a keyed archive in an object you provide.
- [negateBooleanTransformerName](negatebooleantransformername.md): This value transformer negates a boolean value, transforming true to false and false to true.
- [secureUnarchiveFromDataTransformerName](secureunarchivefromdatatransformername.md): The name of the value transformer that creates then returns an object by attempting to unarchive the data to a class that supports secure coding.

# NSUnarchiveFromDataTransformerName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ (deprecated in 12.0) · iPadOS 3.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

The name of the value transformer that attempts to unarchive data from an object you provide.

> Use [NSSecureUnarchiveFromDataTransformerName](secureunarchivefromdatatransformername.md) instead.

## Declaration

```objectivec
extern NSValueTransformerName const NSUnarchiveFromDataTransformerName;
```

<a id="Discussion"></a>

## Discussion

The transformer this property references returns the [NSData](../nsdata.md) instance created by archiving the value. This transformer requires that an object supports [NSCoding](../nscoding.md) in order for the transformer to archive and unarchive.

## See Also

### Type Properties

- [NSIsNilTransformerName](isniltransformername.md): This value transformer returns true if the value is nil.
- [NSIsNotNilTransformerName](isnotniltransformername.md): This value transformer returns true if the value is non-nil.
- [NSKeyedUnarchiveFromDataTransformerName](keyedunarchivefromdatatransformername.md): Deprecated. The name of the value transformer that attempts to unarchive data stored inside a keyed archive in an object you provide.
- [NSNegateBooleanTransformerName](negatebooleantransformername.md): This value transformer negates a boolean value, transforming true to false and false to true.
- [NSSecureUnarchiveFromDataTransformerName](secureunarchivefromdatatransformername.md): The name of the value transformer that creates then returns an object by attempting to unarchive the data to a class that supports secure coding.
