> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodedictionarywithkeysofclasses:objectsofclasses:forkey:](https://developer.apple.com/documentation/foundation/nscoder/decodedictionarywithkeysofclasses:objectsofclasses:forkey:)

# decodeDictionaryWithKeysOfClasses:objectsOfClasses:forKey:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Decodes the \\c NSDictionary object for the given \\c key, which should be an \\c NSDictionary, with keys of the types given in \\c keyClasses and objects of the given non-collection classes in \\c objectClasses (no nested dictionaries or other dictionaries contained in the dictionary, etc) from the given coder.

## Declaration

```objectivec
- (NSDictionary *) decodeDictionaryWithKeysOfClasses:(NSSet<Class> *) keyClasses objectsOfClasses:(NSSet<Class> *) objectClasses forKey:(NSString *) key;
```

<a id="discussion"></a>

## Discussion

Requires \\c NSSecureCoding otherwise an exception is thrown and sets the \\c decodingFailurePolicy to \\c NSDecodingFailurePolicySetErrorAndReturn.

Returns \\c nil if the object for \\c key is not of the expected types, or cannot be decoded, and sets the \\c error on the decoder.
