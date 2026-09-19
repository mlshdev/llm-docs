> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/testing/exittest/condition/success

# success

**Framework:** Swift Testing  
**Kind:** Type Property  
**Availability:** Swift 6.2+ · Xcode 26.0+

A condition that matches when a process exits normally.

## Declaration

```swift
static var success: ExitTest.Condition { get }
```

## Mentioned In

- [Exit testing](../../exit-testing.md)

<a id="discussion"></a>

## Discussion

This condition matches the exit code `EXIT_SUCCESS`.
