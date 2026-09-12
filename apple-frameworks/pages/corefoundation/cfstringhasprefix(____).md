> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringhasprefix(_:_:)](https://developer.apple.com/documentation/corefoundation/cfstringhasprefix(_:_:))

# CFStringHasPrefix(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines if the character data of a string begin with a specified sequence of characters.

## Declaration

```swift
func CFStringHasPrefix(_ theString: CFString!, _ prefix: CFString!) -> Bool
```

## Parameters

- `theString`: The string to search.
- `prefix`: The prefix to search for.

<a id="return-value"></a>

## Return Value

`true` if `theString` begins with `prefix`, `false` if otherwise.

## See Also

### Comparing Strings

- [CFStringCompare(\_:\_:\_:)](cfstringcompare%28______%29.md): Compares one string with another string.
- [CFStringCompareWithOptions(\_:\_:\_:\_:)](cfstringcomparewithoptions%28________%29.md): Compares a range of the characters in one string with that of another string.
- [CFStringCompareWithOptionsAndLocale(\_:\_:\_:\_:\_:)](cfstringcomparewithoptionsandlocale%28__________%29.md): Compares a range of the characters in one string with another string using a given locale.
- [CFStringHasSuffix(\_:\_:)](cfstringhassuffix%28____%29.md): Determines if a string ends with a specified sequence of characters.

# CFStringHasPrefix (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines if the character data of a string begin with a specified sequence of characters.

## Declaration

```objectivec
extern Boolean CFStringHasPrefix(CFStringRef theString, CFStringRef prefix);
```

## Parameters

- `theString`: The string to search.
- `prefix`: The prefix to search for.

<a id="return-value"></a>

## Return Value

`true` if `theString` begins with `prefix`, `false` if otherwise.

## See Also

### Comparing Strings

- [CFStringCompare](cfstringcompare%28______%29.md): Compares one string with another string.
- [CFStringCompareWithOptions](cfstringcomparewithoptions%28________%29.md): Compares a range of the characters in one string with that of another string.
- [CFStringCompareWithOptionsAndLocale](cfstringcomparewithoptionsandlocale%28__________%29.md): Compares a range of the characters in one string with another string using a given locale.
- [CFStringHasSuffix](cfstringhassuffix%28____%29.md): Determines if a string ends with a specified sequence of characters.
