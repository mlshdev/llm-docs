> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_associationpolicy](https://developer.apple.com/documentation/objectivec/objc_associationpolicy)

# objc_AssociationPolicy (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Type to specify the behavior of an association.

## Declaration

```swift
enum objc_AssociationPolicy
```

## Topics

### Enumeration Cases

- [objc_AssociationPolicy.OBJC_ASSOCIATION_ASSIGN](objc_associationpolicy/objc_association_assign.md): Specifies an unsafe unretained reference to the associated object.
- [objc_AssociationPolicy.OBJC_ASSOCIATION_COPY](objc_associationpolicy/objc_association_copy.md): Specifies that the associated object is copied, and that the association is made atomically.
- [objc_AssociationPolicy.OBJC_ASSOCIATION_COPY_NONATOMIC](objc_associationpolicy/objc_association_copy_nonatomic.md): Specifies that the associated object is copied, and that the association is not made atomically.
- [objc_AssociationPolicy.OBJC_ASSOCIATION_RETAIN](objc_associationpolicy/objc_association_retain.md): Specifies a strong reference to the associated object, and that the association is made atomically.
- [objc_AssociationPolicy.OBJC_ASSOCIATION_RETAIN_NONATOMIC](objc_associationpolicy/objc_association_retain_nonatomic.md): Specifies a strong reference to the associated object, and that the association is not made atomically.

### Initializers

- [init(rawValue:)](objc_associationpolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# objc_AssociationPolicy (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Type to specify the behavior of an association.

## Declaration

```objectivec
enum objc_AssociationPolicy : uintptr_t;
```

## Topics

### Enumeration Cases

- [OBJC_ASSOCIATION_ASSIGN](objc_associationpolicy/objc_association_assign.md): Specifies an unsafe unretained reference to the associated object.
- [OBJC_ASSOCIATION_COPY](objc_associationpolicy/objc_association_copy.md): Specifies that the associated object is copied, and that the association is made atomically.
- [OBJC_ASSOCIATION_COPY_NONATOMIC](objc_associationpolicy/objc_association_copy_nonatomic.md): Specifies that the associated object is copied, and that the association is not made atomically.
- [OBJC_ASSOCIATION_RETAIN](objc_associationpolicy/objc_association_retain.md): Specifies a strong reference to the associated object, and that the association is made atomically.
- [OBJC_ASSOCIATION_RETAIN_NONATOMIC](objc_associationpolicy/objc_association_retain_nonatomic.md): Specifies a strong reference to the associated object, and that the association is not made atomically.
