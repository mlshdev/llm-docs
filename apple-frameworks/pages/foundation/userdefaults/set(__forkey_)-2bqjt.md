> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/set(_:forkey:)-2bqjt](https://developer.apple.com/documentation/foundation/userdefaults/set(_:forkey:)-2bqjt)

# set(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key to a URL.

## Declaration

```swift
func set(_ url: URL?, forKey defaultName: String)
```

## Parameters

- `url`: The value to store in the defaults database.
- `defaultName`: The key that contains the setting’s name.

<a id="discussion"></a>

## Discussion

This method handles file URLs differently than other types of URLs. For most URLs, the method stores the URL object as the root object of a [Data](../data.md) archive. If `url` contains a path to a file in the home directory, this method replaces the home directory portion of the path with a tilde (~) character before generating the data object. When you read the value back, the system expands the tilde character to the current home directory path.

If the location of a file might change, don’t use a file URL to specify its location. Instead, create a bookmark URL using the [bookmarkData(withContentsOf:)](../nsurl/bookmarkdata%28withcontentsof_%29.md) method and save that URL instead. Bookmark URLs store additional information about the file so the system can locate the file later, even if the path to that file changes.

After you call this method, the system generates a [didChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Setting the value for a key

- [set(\_:forKey:)](set%28__forkey_%29-3nn5m.md): Sets the value of the specified key to a Boolean value.
- [set(\_:forKey:)](set%28__forkey_%29-3v852.md): Sets the value of the specified key to an integer.
- [set(\_:forKey:)](set%28__forkey_%29-1t5ec.md): Sets the value of the specified key to a floating-point number.
- [set(\_:forKey:)](set%28__forkey_%29-2w22f.md): Sets the value of the specified key to a double.
- [set(\_:forKey:)](set%28__forkey_%29-8ab6d.md): Sets the value of the specified key to a property list object.

# setURL:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value of the specified key to a URL.

## Declaration

```objectivec
- (void) setURL:(NSURL *) url forKey:(NSString *) defaultName;
```

## Parameters

- `url`: The value to store in the defaults database.
- `defaultName`: The key that contains the setting’s name.

<a id="discussion"></a>

## Discussion

This method handles file URLs differently than other types of URLs. For most URLs, the method stores the URL object as the root object of a [Data](../data.md) archive. If `url` contains a path to a file in the home directory, this method replaces the home directory portion of the path with a tilde (~) character before generating the data object. When you read the value back, the system expands the tilde character to the current home directory path.

If the location of a file might change, don’t use a file URL to specify its location. Instead, create a bookmark URL using the [bookmarkDataWithContentsOfURL:error:](../nsurl/bookmarkdata%28withcontentsof_%29.md) method and save that URL instead. Bookmark URLs store additional information about the file so the system can locate the file later, even if the path to that file changes.

After you call this method, the system generates a [NSUserDefaultsDidChangeNotification](didchangenotification.md) for registered observers.

## See Also

### Setting the value for a key

- [setBool:forKey:](set%28__forkey_%29-3nn5m.md): Sets the value of the specified key to a Boolean value.
- [setInteger:forKey:](set%28__forkey_%29-3v852.md): Sets the value of the specified key to an integer.
- [setFloat:forKey:](set%28__forkey_%29-1t5ec.md): Sets the value of the specified key to a floating-point number.
- [setDouble:forKey:](set%28__forkey_%29-2w22f.md): Sets the value of the specified key to a double.
- [setObject:forKey:](set%28__forkey_%29-8ab6d.md): Sets the value of the specified key to a property list object.
