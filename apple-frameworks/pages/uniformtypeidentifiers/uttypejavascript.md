> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypejavascript](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypejavascript)

# UTTypeJavaScript

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents JavaScript source code.

## Declaration

```objectivec
extern UTType * const UTTypeJavaScript;
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `com.netscape.javascript-source`.

This type conforms to [UTTypeSourceCode](uttypesourcecode.md) and [UTTypeExecutable](uttypeexecutable.md).

## See Also

### Scripted programming language sources

- [UTTypeScript](uttypescript.md): A base type that represents any scripting language source.
- [UTTypeAppleScript](uttypeapplescript.md): A type that represents an AppleScript text-based script.
- [UTTypeOSAScript](uttypeosascript.md): A type that represents an Open Scripting Architecture binary script.
- [UTTypeOSAScriptBundle](uttypeosascriptbundle.md): A type that represents an Open Scripting Architecture script bundle.
- [UTTypeMakefile](uttypemakefile.md): A type that represents a Makefile.
- [UTTypeShellScript](uttypeshellscript.md): A base type that represents a shell script.
- [UTTypePythonScript](uttypepythonscript.md): A type that represents a Python script.
- [UTTypeRubyScript](uttyperubyscript.md): A type that represents a Ruby script.
- [UTTypePerlScript](uttypeperlscript.md): A type that represents a Perl script.
- [UTTypePHPScript](uttypephpscript.md): A type that represents a PHP script.
