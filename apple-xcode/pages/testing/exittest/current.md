> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/testing/exittest/current

# current

**Framework:** Swift Testing  
**Kind:** Type Property  
**Availability:** Swift 6.2+ · Xcode 26.0+

The exit test that is running in the current process, if any.

## Declaration

```swift
static var current: ExitTest? { get }
```

<a id="discussion"></a>

## Discussion

If the current process was created to run an exit test, the value of this property describes that exit test. If this process is the parent process of an exit test, or if no exit test is currently running, the value of this property is `nil`.

The value of this property is constant across all tasks in the current process.
