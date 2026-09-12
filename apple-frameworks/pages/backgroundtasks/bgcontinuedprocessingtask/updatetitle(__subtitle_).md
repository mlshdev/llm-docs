> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtask/updatetitle(_:subtitle:)](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtask/updatetitle(_:subtitle:))

# updateTitle(\_:subtitle:) (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Update the task title and subtitle that the system displays to a person.

## Declaration

```swift
func updateTitle(_ title: String, subtitle: String)
```

## Parameters

- `title`: The localized title displayed to a person.
- `subtitle`: The localized subtitle displayed to a person.

<a id="discussion"></a>

## Discussion

The system displays Continuous Background Task requests in a Live Activity for a person to monitor progress and cancel a task, if they wish.

## See Also

### Titling the task

- [title](title.md): The localized title displayed to a person.
- [subtitle](subtitle.md): The localized subtitle displayed to a person.

# updateTitle:subtitle: (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Update the task title and subtitle that the system displays to a person.

## Declaration

```objectivec
- (void) updateTitle:(NSString *) title subtitle:(NSString *) subtitle;
```

## Parameters

- `title`: The localized title displayed to a person.
- `subtitle`: The localized subtitle displayed to a person.

<a id="discussion"></a>

## Discussion

The system displays Continuous Background Task requests in a Live Activity for a person to monitor progress and cancel a task, if they wish.

## See Also

### Titling the task

- [title](title.md): The localized title displayed to a person.
- [subtitle](subtitle.md): The localized subtitle displayed to a person.
