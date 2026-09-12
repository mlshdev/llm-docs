> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsrelationshipdescription/maxcount](https://developer.apple.com/documentation/coredata/nsrelationshipdescription/maxcount)

# maxCount (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The maximum number of managed objects the relationship can reference.

## Declaration

```swift
var maxCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

If you declare a relationship attribute as optional when defining your entities, the framework only enforces [minCount](mincount.md) and [maxCount](maxcount.md) when that attribute is not `nil`.

The default value is `0`.

## See Also

### Configuring Cardinality

- [isToMany](istomany.md): Returns a Boolean value that indicates whether the relationship can contain many managed objects.
- [minCount](mincount.md): The minimum number of managed objects the relationship can reference.

# maxCount (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The maximum number of managed objects the relationship can reference.

## Declaration

```objectivec
@property NSUInteger maxCount;
```

<a id="Discussion"></a>

## Discussion

If you declare a relationship attribute as optional when defining your entities, the framework only enforces [minCount](mincount.md) and [maxCount](maxcount.md) when that attribute is not `nil`.

The default value is `0`.

## See Also

### Configuring Cardinality

- [toMany](istomany.md): Returns a Boolean value that indicates whether the relationship can contain many managed objects.
- [minCount](mincount.md): The minimum number of managed objects the relationship can reference.
