> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsassertionhandler/handlefailureinmethod:object:file:linenumber:description:](https://developer.apple.com/documentation/foundation/nsassertionhandler/handlefailureinmethod:object:file:linenumber:description:)

# handleFailureInMethod:object:file:lineNumber:description:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
- (void) handleFailureInMethod:(SEL) selector object:(id) object file:(NSString *) fileName lineNumber:(NSInteger) line description:(NSString *) format;
```

## See Also

### Handling Assertion Failures

- [currentHandler](current.md): Returns the `NSAssertionHandler` object associated with the current thread.
- [handleFailureInFunction:file:lineNumber:description:](handlefailureinfunction_file_linenumber_description_.md)
