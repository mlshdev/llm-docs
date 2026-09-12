> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/publish()](https://developer.apple.com/documentation/foundation/progress/publish())

# publish() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Publishes the progress object for other processes to observe it.

## Declaration

```swift
func publish()
```

<a id="Discussion"></a>

## Discussion

Entries in the user info dictionary determine whether another process can discover the progress object to observe it, and how it does that. For example, a [fileURLKey](../progressuserinfokey/fileurlkey.md) entry makes a progress object discoverable by corresponding invokers of [addSubscriber(forFileURL:withPublishingHandler:)](addsubscriber%28forfileurl_withpublishinghandler_%29.md). The system constrains access to the published progress URL with your app sandbox. If you can’t see the file due to the app’s sandbox restrictions, you can’t observe the progress on it.

When you make a progress object observable by other processes, you must ensure that at least [localizedDescription](localizeddescription.md), [isIndeterminate](isindeterminate.md), and [fractionCompleted](fractioncompleted.md) always work when you send proxies of your progress object in other processes. You make [isIndeterminate](isindeterminate.md) and [fractionCompleted](fractioncompleted.md) work by accurately setting the total and completed unit counts of the progress. You make [localizedDescription](localizeddescription.md) work by setting the value of the kind property to something valid, like [file](../progresskind/file.md), and then fulfilling the requirements for that kind of progress.

You can instead set the value of [localizedDescription](localizeddescription.md) directly, but that’s not perfectly reliable because other processes might be using a different localization than yours.

You can publish an instance of [Progress](../progress.md) one time only.

## See Also

### Reporting Progress to Other Processes

- [unpublish()](unpublish%28%29.md): Removes a progress object from publication, making it unobservable by other processes.

# publish (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Publishes the progress object for other processes to observe it.

## Declaration

```objectivec
- (void) publish;
```

<a id="Discussion"></a>

## Discussion

Entries in the user info dictionary determine whether another process can discover the progress object to observe it, and how it does that. For example, a [NSProgressFileURLKey](../progressuserinfokey/fileurlkey.md) entry makes a progress object discoverable by corresponding invokers of [addSubscriberForFileURL:withPublishingHandler:](addsubscriber%28forfileurl_withpublishinghandler_%29.md). The system constrains access to the published progress URL with your app sandbox. If you can’t see the file due to the app’s sandbox restrictions, you can’t observe the progress on it.

When you make a progress object observable by other processes, you must ensure that at least [localizedDescription](localizeddescription.md), [indeterminate](isindeterminate.md), and [fractionCompleted](fractioncompleted.md) always work when you send proxies of your progress object in other processes. You make [indeterminate](isindeterminate.md) and [fractionCompleted](fractioncompleted.md) work by accurately setting the total and completed unit counts of the progress. You make [localizedDescription](localizeddescription.md) work by setting the value of the kind property to something valid, like [NSProgressKindFile](../progresskind/file.md), and then fulfilling the requirements for that kind of progress.

You can instead set the value of [localizedDescription](localizeddescription.md) directly, but that’s not perfectly reliable because other processes might be using a different localization than yours.

You can publish an instance of [NSProgress](../progress.md) one time only.

## See Also

### Reporting Progress to Other Processes

- [unpublish](unpublish%28%29.md): Removes a progress object from publication, making it unobservable by other processes.
