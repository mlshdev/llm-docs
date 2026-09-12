> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/title](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/title)

# title (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The localized task title displayed to a person.

## Declaration

```swift
var title: String { get set }
```

<a id="discussion"></a>

## Discussion

Define the value of this property as a parameter to the request initializer:  [init(identifier:title:subtitle:)](init%28identifier_title_subtitle_%29.md).

## See Also

### Titling the task

- [subtitle](subtitle.md): The localized subtitle displayed to a person.

# title (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The localized task title displayed to a person.

## Declaration

```objectivec
@property (copy, nonnull) NSString * title;
```

<a id="discussion"></a>

## Discussion

Define the value of this property as a parameter to the request initializer:  [initWithIdentifier:title:subtitle:](init%28identifier_title_subtitle_%29.md).

## See Also

### Titling the task

- [subtitle](subtitle.md): The localized subtitle displayed to a person.
