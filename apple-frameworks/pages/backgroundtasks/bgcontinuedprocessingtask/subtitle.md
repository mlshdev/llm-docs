> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtask/subtitle](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtask/subtitle)

# subtitle (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The localized subtitle displayed to a person.

## Declaration

```swift
var subtitle: String { get }
```

<a id="discussion"></a>

## Discussion

Define the value of this property as a parameter to the request initializer:  [init(identifier:title:subtitle:)](../bgcontinuedprocessingtaskrequest/init%28identifier_title_subtitle_%29.md). After that, this property is read only, however you can update the subtitle by calling [updateTitle(\_:subtitle:)](updatetitle%28__subtitle_%29.md).

## See Also

### Titling the task

- [title](title.md): The localized title displayed to a person.
- [updateTitle(\_:subtitle:)](updatetitle%28__subtitle_%29.md): Update the task title and subtitle that the system displays to a person.

# subtitle (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The localized subtitle displayed to a person.

## Declaration

```objectivec
@property (copy, readonly) NSString * subtitle;
```

<a id="discussion"></a>

## Discussion

Define the value of this property as a parameter to the request initializer:  [initWithIdentifier:title:subtitle:](../bgcontinuedprocessingtaskrequest/init%28identifier_title_subtitle_%29.md). After that, this property is read only, however you can update the subtitle by calling [updateTitle:subtitle:](updatetitle%28__subtitle_%29.md).

## See Also

### Titling the task

- [title](title.md): The localized title displayed to a person.
- [updateTitle:subtitle:](updatetitle%28__subtitle_%29.md): Update the task title and subtitle that the system displays to a person.
