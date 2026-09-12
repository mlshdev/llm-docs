> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/unarchivedarrayofobjectsofclasses:fromdata:error:](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/unarchivedarrayofobjectsofclasses:fromdata:error:)

# unarchivedArrayOfObjectsOfClasses:fromData:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Decodes the \\c NSArray root object from \\c data which should be an \\c NSArray, containing the given non-collection classes in \\c classes  (no nested arrays or arrays of dictionaries, etc) from the given archive, previously encoded by \\c NSKeyedArchiver.

## Declaration

```objectivec
+ (NSArray *) unarchivedArrayOfObjectsOfClasses:(NSSet<Class> *) classes fromData:(NSData *) data error:(NSError **) error;
```

<a id="discussion"></a>

## Discussion

Enables \\c requiresSecureCoding and sets the \\c decodingFailurePolicy to \\c NSDecodingFailurePolicySetErrorAndReturn.

Returns \\c nil if the given data is not valid or cannot be decoded, and sets the \\c error out parameter.
