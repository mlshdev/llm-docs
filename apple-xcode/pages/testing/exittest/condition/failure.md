> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/exittest/condition/failure](https://developer.apple.com/documentation/testing/exittest/condition/failure)

# failure

**Framework:** Swift Testing  
**Kind:** Type Property  
**Availability:** Swift 6.2+ · Xcode 26.0+

A condition that matches when a process exits abnormally

## Declaration

```swift
static var failure: ExitTest.Condition { get }
```

## Mentioned In

- [Exit testing](../../exit-testing.md)

<a id="discussion"></a>

## Discussion

This condition matches any exit code other than `EXIT_SUCCESS` or any signal that causes the process to exit.

## See Also

### Failing exit conditions

- [exitCode(\_:)](exitcode%28__%29.md): Creates a condition that matches when a process terminates with a given exit code.
- [signal(\_:)](signal%28__%29.md): Creates a condition that matches when a process exits with a given signal.
