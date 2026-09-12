> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsrelationshipdescription/mincount](https://developer.apple.com/documentation/coredata/nsrelationshipdescription/mincount)

# minCount (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The minimum number of managed objects the relationship can reference.

## Declaration

```swift
var minCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

If you declare a relationship attribute as optional when defining your entities, the framework only enforces [minCount](mincount.md) and [maxCount](maxcount.md) when that attribute is not `nil`.

The default value is `0`.

## See Also

### Configuring Cardinality

- [isToMany](istomany.md): Returns a Boolean value that indicates whether the relationship can contain many managed objects.
- [maxCount](maxcount.md): The maximum number of managed objects the relationship can reference.

# minCount (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The minimum number of managed objects the relationship can reference.

## Declaration

```objectivec
@property NSUInteger minCount;
```

<a id="Discussion"></a>

## Discussion

If you declare a relationship attribute as optional when defining your entities, the framework only enforces [minCount](mincount.md) and [maxCount](maxcount.md) when that attribute is not `nil`.

The default value is `0`.

## See Also

### Configuring Cardinality

- [toMany](istomany.md): Returns a Boolean value that indicates whether the relationship can contain many managed objects.
- [maxCount](maxcount.md): The maximum number of managed objects the relationship can reference.
