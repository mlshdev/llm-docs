> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/subtitle](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/subtitle)

# subtitle (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The localized subtitle displayed to a person.

## Declaration

```swift
var subtitle: String { get set }
```

<a id="discussion"></a>

## Discussion

Define the value of this property as a parameter to the request initializer:  [init(identifier:title:subtitle:)](init%28identifier_title_subtitle_%29.md).

## See Also

### Titling the task

- [title](title.md): The localized task title displayed to a person.

# subtitle (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The localized subtitle displayed to a person.

## Declaration

```objectivec
@property (copy, nonnull) NSString * subtitle;
```

<a id="discussion"></a>

## Discussion

Define the value of this property as a parameter to the request initializer:  [initWithIdentifier:title:subtitle:](init%28identifier_title_subtitle_%29.md).

## See Also

### Titling the task

- [title](title.md): The localized task title displayed to a person.
