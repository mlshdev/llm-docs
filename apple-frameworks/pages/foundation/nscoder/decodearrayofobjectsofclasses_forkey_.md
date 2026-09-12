> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodearrayofobjectsofclasses:forkey:](https://developer.apple.com/documentation/foundation/nscoder/decodearrayofobjectsofclasses:forkey:)

# decodeArrayOfObjectsOfClasses:forKey:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Decodes the \\c NSArray object for the given \\c key, which should be an \\c NSArray, containing the given non-collection classes (no nested arrays or arrays of dictionaries, etc) from the coder.

## Declaration

```objectivec
- (NSArray *) decodeArrayOfObjectsOfClasses:(NSSet<Class> *) classes forKey:(NSString *) key;
```

<a id="discussion"></a>

## Discussion

Requires \\c NSSecureCoding otherwise an exception is thrown and sets the \\c decodingFailurePolicy to \\c NSDecodingFailurePolicySetErrorAndReturn.

Returns \\c nil if the object for \\c key is not of the expected types, or cannot be decoded, and sets the \\c error on the decoder.
