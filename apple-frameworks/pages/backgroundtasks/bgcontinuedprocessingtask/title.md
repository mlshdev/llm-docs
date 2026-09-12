> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtask/title](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtask/title)

# title (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The localized title displayed to a person.

## Declaration

```swift
var title: String { get }
```

<a id="discussion"></a>

## Discussion

Define the value of this property as a parameter to the request initializer:  [init(identifier:title:subtitle:)](../bgcontinuedprocessingtaskrequest/init%28identifier_title_subtitle_%29.md). After that, this property is read only, however you can update the title by calling [updateTitle(\_:subtitle:)](updatetitle%28__subtitle_%29.md).

## See Also

### Titling the task

- [subtitle](subtitle.md): The localized subtitle displayed to a person.
- [updateTitle(\_:subtitle:)](updatetitle%28__subtitle_%29.md): Update the task title and subtitle that the system displays to a person.

# title (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The localized title displayed to a person.

## Declaration

```objectivec
@property (copy, readonly) NSString * title;
```

<a id="discussion"></a>

## Discussion

Define the value of this property as a parameter to the request initializer:  [initWithIdentifier:title:subtitle:](../bgcontinuedprocessingtaskrequest/init%28identifier_title_subtitle_%29.md). After that, this property is read only, however you can update the title by calling [updateTitle:subtitle:](updatetitle%28__subtitle_%29.md).

## See Also

### Titling the task

- [subtitle](subtitle.md): The localized subtitle displayed to a person.
- [updateTitle:subtitle:](updatetitle%28__subtitle_%29.md): Update the task title and subtitle that the system displays to a person.
