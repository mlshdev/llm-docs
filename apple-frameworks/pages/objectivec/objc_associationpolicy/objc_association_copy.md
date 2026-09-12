> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_associationpolicy/objc_association_copy](https://developer.apple.com/documentation/objectivec/objc_associationpolicy/objc_association_copy)

# objc_AssociationPolicy.OBJC_ASSOCIATION_COPY (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies that the associated object is copied, and that the association is made atomically.

## Declaration

```swift
case OBJC_ASSOCIATION_COPY
```

## See Also

### Enumeration Cases

- [objc_AssociationPolicy.OBJC_ASSOCIATION_ASSIGN](objc_association_assign.md): Specifies an unsafe unretained reference to the associated object.
- [objc_AssociationPolicy.OBJC_ASSOCIATION_COPY_NONATOMIC](objc_association_copy_nonatomic.md): Specifies that the associated object is copied, and that the association is not made atomically.
- [objc_AssociationPolicy.OBJC_ASSOCIATION_RETAIN](objc_association_retain.md): Specifies a strong reference to the associated object, and that the association is made atomically.
- [objc_AssociationPolicy.OBJC_ASSOCIATION_RETAIN_NONATOMIC](objc_association_retain_nonatomic.md): Specifies a strong reference to the associated object, and that the association is not made atomically.

# OBJC_ASSOCIATION_COPY (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies that the associated object is copied, and that the association is made atomically.

## Declaration

```objectivec
OBJC_ASSOCIATION_COPY
```

## See Also

### Enumeration Cases

- [OBJC_ASSOCIATION_ASSIGN](objc_association_assign.md): Specifies an unsafe unretained reference to the associated object.
- [OBJC_ASSOCIATION_COPY_NONATOMIC](objc_association_copy_nonatomic.md): Specifies that the associated object is copied, and that the association is not made atomically.
- [OBJC_ASSOCIATION_RETAIN](objc_association_retain.md): Specifies a strong reference to the associated object, and that the association is made atomically.
- [OBJC_ASSOCIATION_RETAIN_NONATOMIC](objc_association_retain_nonatomic.md): Specifies a strong reference to the associated object, and that the association is not made atomically.
