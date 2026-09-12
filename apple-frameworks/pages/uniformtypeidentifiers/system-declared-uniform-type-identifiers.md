> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/system-declared-uniform-type-identifiers](https://developer.apple.com/documentation/uniformtypeidentifiers/system-declared-uniform-type-identifiers)

# System-declared uniform type identifiers (Swift)

**Framework:** Uniform Type Identifiers  
**Kind:** API Collection

Common types that the system declares.

<a id="overview"></a>

## Overview

Uniform type identifiers declare common types for resources an app loads, saves, or opens from other apps. Apps that use proprietary types can define them by using the system’s unified type identifiers as base types.

## Topics

### 3D content

- [threeDContent](uttype-swift.struct/threedcontent.md): A base type that represents 3D content.
- [usd](uttype-swift.struct/usd.md): A type that represents Universal Scene Description content.
- [usdz](uttype-swift.struct/usdz.md): A type that represents Universal Scene Description Package content.

### Apple 3D content

- [realityFile](uttype-swift.struct/realityfile.md): A type that represents a Reality Composer file.
- [sceneKitScene](uttype-swift.struct/scenekitscene.md): A type that represents a SceneKit serialized scene.
- [arReferenceObject](uttype-swift.struct/arreferenceobject.md): A type that represents an augmented reality reference object.

### Apple file system objects

- [directory](uttype-swift.struct/directory.md): A type that represents a file system directory, including packages and folders.
- [symbolicLink](uttype-swift.struct/symboliclink.md): A type that represents a symbolic link.
- [mountPoint](uttype-swift.struct/mountpoint.md): A type that represents a volume mount point.
- [aliasFile](uttype-swift.struct/aliasfile.md): A type that represents an alias file.
- [folder](uttype-swift.struct/folder.md): A type that represents a user-browsable directory.
- [volume](uttype-swift.struct/volume.md): A type that represents the root folder of a volume or mount point.
- [diskImage](uttype-swift.struct/diskimage.md): A type that represents a data item that’s mountable as a volume.

### Apple image formats

- [heic](uttype-swift.struct/heic.md): A type that represents High Efficiency Image Coding images.
- [heif](uttype-swift.struct/heif.md): A type that represents High Efficiency Image File Format images.
- [livePhoto](uttype-swift.struct/livephoto.md): A type that represents Live Photos.

### Apple system types

- [framework](uttype-swift.struct/framework.md): A type that represents an Apple framework bundle.
- [applicationBundle](uttype-swift.struct/applicationbundle.md): A type that represents a bundled app.
- [applicationExtension](uttype-swift.struct/applicationextension.md): A type that represents an app extension.
- [spotlightImporter](uttype-swift.struct/spotlightimporter.md): A type that represents a Spotlight metadata importer bundle.
- [quickLookGenerator](uttype-swift.struct/quicklookgenerator.md): A type that represents a QuickLook preview generator bundle.
- [xpcService](uttype-swift.struct/xpcservice.md): A type that represents an XPC service bundle.
- [systemPreferencesPane](uttype-swift.struct/systempreferencespane.md): A type that represents a System Preferences pane.

### Application files

- [pdf](uttype-swift.struct/pdf.md): A type that represents Adobe Portable Document Format (PDF) documents.
- [rtfd](uttype-swift.struct/rtfd.md): A type that represents Rich Text Format Directory documents.
- [flatRTFD](uttype-swift.struct/flatrtfd.md): A type that represents flattened Rich Text Format Directory documents.
- [epub](uttype-swift.struct/epub.md): A type that represents data in the electronic publication (EPUB) format.

### Audio

- [mp3](uttype-swift.struct/mp3.md): A type that represents MP3 audio.
- [aiff](uttype-swift.struct/aiff.md): A type that represents data in AIFF audio format.
- [wav](uttype-swift.struct/wav.md): A type that represents data in Microsoft Waveform Audio File Format.
- [midi](uttype-swift.struct/midi.md): A type that represents data in MIDI audio format.
- [playlist](uttype-swift.struct/playlist.md): A base type that represents a playlist.
- [m3uPlaylist](uttype-swift.struct/m3uplaylist.md): A type that represents an M3U or M3U8 playlist.

### Audio and video

- [quickTimeMovie](uttype-swift.struct/quicktimemovie.md): A type that represents a QuickTime movie.
- [mpeg](uttype-swift.struct/mpeg.md): A type that represents an MPEG-1 or MPEG-2 movie.
- [mpeg2Video](uttype-swift.struct/mpeg2video.md): A type that represents an MPEG-2 video.
- [mpeg2TransportStream](uttype-swift.struct/mpeg2transportstream.md): A type that represents data in MPEG-2 transport stream movie format.
- [mpeg4Movie](uttype-swift.struct/mpeg4movie.md): A type that represents an MPEG-4 movie.
- [mpeg4Audio](uttype-swift.struct/mpeg4audio.md): A type that represents an MPEG-4 audio layer file.
- [appleProtectedMPEG4Video](uttype-swift.struct/appleprotectedmpeg4video.md): A type that represents data in Apple-protected MPEG-4 format.
- [appleProtectedMPEG4Audio](uttype-swift.struct/appleprotectedmpeg4audio.md): A type that represents data in Apple-protected MPEG-4 format.
- [avi](uttype-swift.struct/avi.md): A type that represents data in AVI movie format.

### Compiled programming language sources

- [assemblyLanguageSource](uttype-swift.struct/assemblylanguagesource.md): A type that represents assembly language source code.
- [cHeader](uttype-swift.struct/cheader.md): A type that represents a C header file.
- [cSource](uttype-swift.struct/csource.md): A type that represents a C source code file.
- [cPlusPlusHeader](uttype-swift.struct/cplusplusheader.md): A type that represents a C++ header file.
- [cPlusPlusSource](uttype-swift.struct/cplusplussource.md): A type that represents a C++ source code file.
- [objectiveCPlusPlusSource](uttype-swift.struct/objectivecplusplussource.md): A type that represents an Objective-C++ source code file.
- [objectiveCSource](uttype-swift.struct/objectivecsource.md): A type that represents an Objective-C source code file.
- [swiftSource](uttype-swift.struct/swiftsource.md): A type that represents a Swift source code file.

### Compressed archives

- [archive](uttype-swift.struct/archive.md): A base type that represents an archive of files and directories.
- [zip](uttype-swift.struct/zip.md): A type that represents a zip archive.
- [gzip](uttype-swift.struct/gzip.md): A type that represents a GNU zip archive.
- [bz2](uttype-swift.struct/bz2.md): A type that represents a bzip2 archive.
- [appleArchive](uttype-swift.struct/applearchive.md): A type that represents an Apple archive of files and directories.

### Cryptographic files

- [pkcs12](uttype-swift.struct/pkcs12.md): A type that represents Public Key Cryptography Standard (PKCS) 12 data.
- [x509Certificate](uttype-swift.struct/x509certificate.md): A type that represents an X.509 certificate.

### Data interchange formats

- [delimitedText](uttype-swift.struct/delimitedtext.md): A base type that represents text containing delimited values.
- [commaSeparatedText](uttype-swift.struct/commaseparatedtext.md): A type that represents text containing comma-separated values.
- [tabSeparatedText](uttype-swift.struct/tabseparatedtext.md): A type that represents text containing tab-separated values.
- [utf8TabSeparatedText](uttype-swift.struct/utf8tabseparatedtext.md): A type that represents UTF-8–encoded text containing tab-separated values.
- [rtf](uttype-swift.struct/rtf.md): A type that represents Rich Text Format data.
- [xml](uttype-swift.struct/xml.md): A type that represents generic XML data.
- [yaml](uttype-swift.struct/yaml.md): A type that represents Yet Another Markup Language data.
- [json](uttype-swift.struct/json.md): A type that represents JavaScript Object Notation (JSON) data.
- [vCard](uttype-swift.struct/vcard.md): A type that represents a vCard file.

### Executables

- [executable](uttype-swift.struct/executable.md): A type that represents an executable.
- [unixExecutable](uttype-swift.struct/unixexecutable.md): A type that represents a UNIX executable.
- [exe](uttype-swift.struct/exe.md): A type that represents a Windows executable.

### Icon images

- [ico](uttype-swift.struct/ico.md): A type that represents Windows icon data.
- [icns](uttype-swift.struct/icns.md): A type that represents Apple icon data.

### Images

- [png](uttype-swift.struct/png.md): A type that represents a PNG image.
- [gif](uttype-swift.struct/gif.md): A type that represents a GIF image.
- [jpeg](uttype-swift.struct/jpeg.md): A type that represents a JPEG image.
- [webP](uttype-swift.struct/webp.md): A type that represents a WebP image.
- [tiff](uttype-swift.struct/tiff.md): A type that represents a TIFF image.
- [bmp](uttype-swift.struct/bmp.md): A type that represents a Windows bitmap image.
- [svg](uttype-swift.struct/svg.md): A type that represents a scalable vector graphics (SVG) image.
- [rawImage](uttype-swift.struct/rawimage.md): A base type that represents a raw image format that you use in digital photography.

### Internet-specific

- [html](uttype-swift.struct/html.md): A type that represents any version of HTML.
- [webArchive](uttype-swift.struct/webarchive.md): A type that represents WebKit web archive data.
- [internetLocation](uttype-swift.struct/internetlocation.md): A base type that represents an Apple internet location file.
- [internetShortcut](uttype-swift.struct/internetshortcut.md): A type that represents a Microsoft internet shortcut file.

### Property lists

- [propertyList](uttype-swift.struct/propertylist.md): A base type that represents a property list.
- [xmlPropertyList](uttype-swift.struct/xmlpropertylist.md): A type that represents an XML property list.
- [binaryPropertyList](uttype-swift.struct/binarypropertylist.md): A type that represents a binary property list.

### Shazam

- [shazamSignature](uttype-swift.struct/shazamsignature.md): A type that represents a signature.
- [shazamCustomCatalog](uttype-swift.struct/shazamcustomcatalog.md): A type that represents a custom catalog.

### Scripted programming language sources

- [script](uttype-swift.struct/script.md): A base type that represents any scripting language source.
- [appleScript](uttype-swift.struct/applescript.md): A type that represents an AppleScript text-based script.
- [javaScript](uttype-swift.struct/javascript.md): A type that represents JavaScript source code.
- [osaScript](uttype-swift.struct/osascript.md): A type that represents an Open Scripting Architecture binary script.
- [osaScriptBundle](uttype-swift.struct/osascriptbundle.md): A type that represents an Open Scripting Architecture script bundle.
- [makefile](uttype-swift.struct/makefile.md): A type that represents a Makefile.
- [shellScript](uttype-swift.struct/shellscript.md): A base type that represents a shell script.
- [pythonScript](uttype-swift.struct/pythonscript.md): A type that represents a Python script.
- [rubyScript](uttype-swift.struct/rubyscript.md): A type that represents a Ruby script.
- [perlScript](uttype-swift.struct/perlscript.md): A type that represents a Perl script.
- [phpScript](uttype-swift.struct/phpscript.md): A type that represents a PHP script.

### Text files

- [text](uttype-swift.struct/text.md): A base type that represents all text-encoded data, including text with markup.
- [plainText](uttype-swift.struct/plaintext.md): A type that represents text with no markup and an unspecified encoding.
- [utf8PlainText](uttype-swift.struct/utf8plaintext.md): A type that represents plain text encoded as UTF-8.
- [utf16PlainText](uttype-swift.struct/utf16plaintext.md): A type that represents plain text encoded as UTF-16 in native byte order with an optional bill of materials.
- [utf16ExternalPlainText](uttype-swift.struct/utf16externalplaintext.md): A type that represents plain text encoded as UTF-16 with an optional bill of materials.

### URLs

- [url](uttype-swift.struct/url.md): A type that represents a URL.
- [fileURL](uttype-swift.struct/fileurl.md): A type that represents a URL to a file in the file system.
- [urlBookmarkData](uttype-swift.struct/urlbookmarkdata.md): A type that represents a URL bookmark.

### Apple system base types

- [item](uttype-swift.struct/item.md): A generic base type for most objects, such as files or directories.
- [content](uttype-swift.struct/content.md): A base type that represents anything containing user-viewable content.
- [compositeContent](uttype-swift.struct/compositecontent.md): A base type that represents a content format supporting mixed embedded content.
- [data](uttype-swift.struct/data.md): A base type that represents any sort of byte stream, including files and in-memory data.
- [resolvable](uttype-swift.struct/resolvable.md): A base type that represents a resolvable reference, including symbolic links and aliases.
- [package](uttype-swift.struct/package.md): A base type that represents a packaged directory.
- [bundle](uttype-swift.struct/bundle.md): A base type that represents a directory that conforms to one of the bundle layouts.
- [pluginBundle](uttype-swift.struct/pluginbundle.md): A base type that represents a bundle-based plug-in.
- [application](uttype-swift.struct/application.md): A base type that represents a macOS, iOS, iPadOS, watchOS, and tvOS app.
- [sourceCode](uttype-swift.struct/sourcecode.md): A base type that represents source code of any programming language.
- [bookmark](uttype-swift.struct/bookmark.md): A base type that represents bookmark data.
- [log](uttype-swift.struct/log.md): A base type that represents console log data.

### Application base types

- [spreadsheet](uttype-swift.struct/spreadsheet.md): A base type that represents a spreadsheet document.
- [presentation](uttype-swift.struct/presentation.md): A base type that represents a presentation document.
- [database](uttype-swift.struct/database.md): A base type that represents a database store.
- [message](uttype-swift.struct/message.md): A base type that represents a message.
- [contact](uttype-swift.struct/contact.md): A base type that represents contact information.
- [calendarEvent](uttype-swift.struct/calendarevent.md): A base type that represents a calendar event.
- [toDoItem](uttype-swift.struct/todoitem.md): A type that represents a to-do item.
- [emailMessage](uttype-swift.struct/emailmessage.md): A type that represents an email message.
- [font](uttype-swift.struct/font.md): A base type that represents a font.

### Image, audio, and video base types

- [image](uttype-swift.struct/image.md): A base type that represents image data.
- [audio](uttype-swift.struct/audio.md): A type that represents audio that doesn’t contain video.
- [audiovisualContent](uttype-swift.struct/audiovisualcontent.md): A base type that represents data that contains video content that may or may not also include audio.
- [movie](uttype-swift.struct/movie.md): A base type representing media formats that may contain both video and audio.
- [video](uttype-swift.struct/video.md): A type that represents video that doesn’t contain audio.

### Tag classes

- [filenameExtension](uttagclass/filenameextension.md): A type property that returns the tag class used to map a type to a filename extension.
- [mimeType](uttagclass/mimetype.md): A type property that returns the tag class used to map a type to a MIME type.

## See Also

### Essentials

- [Defining file and data types for your app](defining-file-and-data-types-for-your-app.md): Declare uniform type identifiers to support your app’s proprietary data formats.

# System-declared uniform type identifiers (Objective-C)

**Framework:** Uniform Type Identifiers  
**Kind:** API Collection

Common types that the system declares.

<a id="overview"></a>

## Overview

Uniform type identifiers declare common types for resources an app loads, saves, or opens from other apps. Apps that use proprietary types can define them by using the system’s unified type identifiers as base types.

## Topics

### 3D content

- [UTType3DContent](uttype3dcontent.md): A base type that represents 3D content.
- [UTTypeUSD](uttypeusd.md): A type that represents Universal Scene Description content.
- [UTTypeUSDZ](uttypeusdz.md): A type that represents Universal Scene Description Package content.

### Apple 3D content

- [UTTypeRealityFile](uttyperealityfile.md): A type that represents a Reality Composer file.
- [UTTypeSceneKitScene](uttypescenekitscene.md): A type that represents a SceneKit serialized scene.
- [UTTypeARReferenceObject](uttypearreferenceobject.md): A type that represents an augmented reality reference object.

### Apple file system objects

- [UTTypeDirectory](uttypedirectory.md): A type that represents a file system directory, including packages and folders.
- [UTTypeSymbolicLink](uttypesymboliclink.md): A type that represents a symbolic link.
- [UTTypeMountPoint](uttypemountpoint.md): A type that represents a volume mount point.
- [UTTypeAliasFile](uttypealiasfile.md): A type that represents an alias file.
- [UTTypeFolder](uttypefolder.md): A type that represents a user-browsable directory.
- [UTTypeVolume](uttypevolume.md): A type that represents the root folder of a volume or mount point.
- [UTTypeDiskImage](uttypediskimage.md): A type that represents a data item that’s mountable as a volume.

### Apple image formats

- [UTTypeHEIC](uttypeheic.md): A type that represents High Efficiency Image Coding images.
- [UTTypeHEIF](uttypeheif.md): A type that represents High Efficiency Image File Format images.
- [UTTypeLivePhoto](uttypelivephoto.md): A type that represents Live Photos.

### Apple system types

- [UTTypeFramework](uttypeframework.md): A type that represents an Apple framework bundle.
- [UTTypeApplicationBundle](uttypeapplicationbundle.md): A type that represents a bundled app.
- [UTTypeApplicationExtension](uttypeapplicationextension.md): A type that represents an app extension.
- [UTTypeSpotlightImporter](uttypespotlightimporter.md): A type that represents a Spotlight metadata importer bundle.
- [UTTypeQuickLookGenerator](uttypequicklookgenerator.md): A type that represents a QuickLook preview generator bundle.
- [UTTypeXPCService](uttypexpcservice.md): A type that represents an XPC service bundle.
- [UTTypeSystemPreferencesPane](uttypesystempreferencespane.md): A type that represents a System Preferences pane.

### Application files

- [UTTypePDF](uttypepdf.md): A type that represents Adobe Portable Document Format (PDF) documents.
- [UTTypeRTFD](uttypertfd.md): A type that represents Rich Text Format Directory documents.
- [UTTypeFlatRTFD](uttypeflatrtfd.md): A type that represents flattened Rich Text Format Directory documents.
- [UTTypeEPUB](uttypeepub.md): A type that represents data in the electronic publication (EPUB) format.

### Audio

- [UTTypeMP3](uttypemp3.md): A type that represents MP3 audio.
- [UTTypeAIFF](uttypeaiff.md): A type that represents data in AIFF audio format.
- [UTTypeWAV](uttypewav.md): A type that represents data in Microsoft Waveform Audio File Format.
- [UTTypeMIDI](uttypemidi.md): A type that represents data in MIDI audio format.
- [UTTypePlaylist](uttypeplaylist.md): A base type that represents a playlist.
- [UTTypeM3UPlaylist](uttypem3uplaylist.md): A type that represents an M3U or M3U8 playlist.

### Audio and video

- [UTTypeQuickTimeMovie](uttypequicktimemovie.md): A type that represents a QuickTime movie.
- [UTTypeMPEG](uttypempeg.md): A type that represents an MPEG-1 or MPEG-2 movie.
- [UTTypeMPEG2Video](uttypempeg2video.md): A type that represents an MPEG-2 video.
- [UTTypeMPEG2TransportStream](uttypempeg2transportstream.md): A type that represents data in MPEG-2 transport stream movie format.
- [UTTypeMPEG4Movie](uttypempeg4movie.md): A type that represents an MPEG-4 movie.
- [UTTypeMPEG4Audio](uttypempeg4audio.md): A type that represents an MPEG-4 audio layer file.
- [UTTypeAppleProtectedMPEG4Video](uttypeappleprotectedmpeg4video.md): A type that represents data in Apple-protected MPEG-4 format.
- [UTTypeAppleProtectedMPEG4Audio](uttypeappleprotectedmpeg4audio.md): A type that represents data in Apple-protected MPEG-4 format.
- [UTTypeAVI](uttypeavi.md): A type that represents data in AVI movie format.

### Compiled programming language sources

- [UTTypeAssemblyLanguageSource](uttypeassemblylanguagesource.md): A type that represents assembly language source code.
- [UTTypeCHeader](uttypecheader.md): A type that represents a C header file.
- [UTTypeCSource](uttypecsource.md): A type that represents a C source code file.
- [UTTypeCPlusPlusHeader](uttypecplusplusheader.md): A type that represents a C++ header file.
- [UTTypeCPlusPlusSource](uttypecplusplussource.md): A type that represents a C++ source code file.
- [UTTypeObjectiveCPlusPlusSource](uttypeobjectivecplusplussource.md): A type that represents an Objective-C++ source code file.
- [UTTypeObjectiveCSource](uttypeobjectivecsource.md): A type that represents an Objective-C source code file.
- [UTTypeSwiftSource](uttypeswiftsource.md): A type that represents a Swift source code file.

### Compressed archives

- [UTTypeArchive](uttypearchive.md): A base type that represents an archive of files and directories.
- [UTTypeZIP](uttypezip.md): A type that represents a zip archive.
- [UTTypeGZIP](uttypegzip.md): A type that represents a GNU zip archive.
- [UTTypeBZ2](uttypebz2.md): A type that represents a bzip2 archive.
- [UTTypeAppleArchive](uttypeapplearchive.md): A type that represents an Apple archive of files and directories.

### Cryptographic files

- [UTTypePKCS12](uttypepkcs12.md): A type that represents Public Key Cryptography Standard (PKCS) 12 data.
- [UTTypeX509Certificate](uttypex509certificate.md): A type that represents an X.509 certificate.

### Data interchange formats

- [UTTypeDelimitedText](uttypedelimitedtext.md): A base type that represents text containing delimited values.
- [UTTypeCommaSeparatedText](uttypecommaseparatedtext.md): A type that represents text containing comma-separated values.
- [UTTypeTabSeparatedText](uttypetabseparatedtext.md): A type that represents text containing tab-separated values.
- [UTTypeUTF8TabSeparatedText](uttypeutf8tabseparatedtext.md): A type that represents UTF-8–encoded text containing tab-separated values.
- [UTTypeRTF](uttypertf.md): A type that represents Rich Text Format data.
- [UTTypeXML](uttypexml.md): A type that represents generic XML data.
- [UTTypeYAML](uttypeyaml.md): A type that represents Yet Another Markup Language data.
- [UTTypeJSON](uttypejson.md): A type that represents JavaScript Object Notation (JSON) data.
- [UTTypeVCard](uttypevcard.md): A type that represents a vCard file.

### Executables

- [UTTypeExecutable](uttypeexecutable.md): A type that represents an executable.
- [UTTypeUnixExecutable](uttypeunixexecutable.md): A type that represents a UNIX executable.
- [UTTypeEXE](uttypeexe.md): A type that represents a Windows executable.

### Icon images

- [UTTypeICO](uttypeico.md): A type that represents Windows icon data.
- [UTTypeICNS](uttypeicns.md): A type that represents Apple icon data.

### Images

- [UTTypePNG](uttypepng.md): A type that represents a PNG image.
- [UTTypeGIF](uttypegif.md): A type that represents a GIF image.
- [UTTypeJPEG](uttypejpeg.md): A type that represents a JPEG image.
- [UTTypeWebP](uttypewebp.md): A type that represents a WebP image.
- [UTTypeTIFF](uttypetiff.md): A type that represents a TIFF image.
- [UTTypeBMP](uttypebmp.md): A type that represents a Windows bitmap image.
- [UTTypeSVG](uttypesvg.md): A type that represents a scalable vector graphics (SVG) image.
- [UTTypeRAWImage](uttyperawimage.md): A base type that represents a raw image format that you use in digital photography.

### Internet-specific

- [UTTypeHTML](uttypehtml.md): A type that represents any version of HTML.
- [UTTypeWebArchive](uttypewebarchive.md): A type that represents WebKit web archive data.
- [UTTypeInternetLocation](uttypeinternetlocation.md): A base type that represents an Apple internet location file.
- [UTTypeInternetShortcut](uttypeinternetshortcut.md): A type that represents a Microsoft internet shortcut file.

### Property lists

- [UTTypePropertyList](uttypepropertylist.md): A base type that represents a property list.
- [UTTypeXMLPropertyList](uttypexmlpropertylist.md): A type that represents an XML property list.
- [UTTypeBinaryPropertyList](uttypebinarypropertylist.md): A type that represents a binary property list.

### Scripted programming language sources

- [UTTypeScript](uttypescript.md): A base type that represents any scripting language source.
- [UTTypeAppleScript](uttypeapplescript.md): A type that represents an AppleScript text-based script.
- [UTTypeJavaScript](uttypejavascript.md): A type that represents JavaScript source code.
- [UTTypeOSAScript](uttypeosascript.md): A type that represents an Open Scripting Architecture binary script.
- [UTTypeOSAScriptBundle](uttypeosascriptbundle.md): A type that represents an Open Scripting Architecture script bundle.
- [UTTypeMakefile](uttypemakefile.md): A type that represents a Makefile.
- [UTTypeShellScript](uttypeshellscript.md): A base type that represents a shell script.
- [UTTypePythonScript](uttypepythonscript.md): A type that represents a Python script.
- [UTTypeRubyScript](uttyperubyscript.md): A type that represents a Ruby script.
- [UTTypePerlScript](uttypeperlscript.md): A type that represents a Perl script.
- [UTTypePHPScript](uttypephpscript.md): A type that represents a PHP script.

### Text files

- [UTTypeText](uttypetext.md): A base type that represents all text-encoded data, including text with markup.
- [UTTypePlainText](uttypeplaintext.md): A type that represents text with no markup and an unspecified encoding.
- [UTTypeUTF8PlainText](uttypeutf8plaintext.md): A type that represents plain text encoded as UTF-8.
- [UTTypeUTF16PlainText](uttypeutf16plaintext.md): A type that represents plain text encoded as UTF-16 in native byte order with an optional bill of materials.
- [UTTypeUTF16ExternalPlainText](uttypeutf16externalplaintext.md): A type that represents plain text encoded as UTF-16 with an optional BOM.
- [UTTypeMarkdown](uttypemarkdown.md): A type that represents Markdown data.

### URLs

- [UTTypeURL](uttypeurl.md): A type that represents a URL.
- [UTTypeFileURL](uttypefileurl.md): A type that represents a URL to a file in the file system.
- [UTTypeURLBookmarkData](uttypeurlbookmarkdata.md): A type that represents a URL bookmark.

### Apple system base types

- [UTTypeItem](uttypeitem.md): A generic base type for most objects, such as files or directories.
- [UTTypeContent](uttypecontent.md): A base type that represents anything containing user-viewable content.
- [UTTypeCompositeContent](uttypecompositecontent.md): A base type that represents a content format supporting mixed embedded content.
- [UTTypeData](uttypedata.md): A base type that represents any sort of byte stream, including files and in-memory data.
- [UTTypeResolvable](uttyperesolvable.md): A base type that represents a resolvable reference, including symbolic links and aliases.
- [UTTypePackage](uttypepackage.md): A base type that represents a packaged directory.
- [UTTypeBundle](uttypebundle.md): A base type that represents a directory that conforms to one of the bundle layouts.
- [UTTypePluginBundle](uttypepluginbundle.md): A base type that represents a bundle-based plug-in.
- [UTTypeApplication](uttypeapplication.md): A base type that represents a macOS, iOS, iPadOS, watchOS, and tvOS app.
- [UTTypeSourceCode](uttypesourcecode.md): A base type that represents source code of any programming language.
- [UTTypeBookmark](uttypebookmark.md): A base type that represents bookmark data.
- [UTTypeLog](uttypelog.md): A base type that represents console log data.

### Application base types

- [UTTypeSpreadsheet](uttypespreadsheet.md): A base type that represents a spreadsheet document.
- [UTTypePresentation](uttypepresentation.md): A base type that represents a presentation document.
- [UTTypeDatabase](uttypedatabase.md): A base type that represents a database store.
- [UTTypeMessage](uttypemessage.md): A base type that represents a message.
- [UTTypeContact](uttypecontact.md): A base type that represents contact information.
- [UTTypeCalendarEvent](uttypecalendarevent.md): A base type that represents a calendar event.
- [UTTypeToDoItem](uttypetodoitem.md): A type that represents a to-do item.
- [UTTypeEmailMessage](uttypeemailmessage.md): A type that represents an email message.
- [UTTypeFont](uttypefont.md): A base type that represents a font.

### Image, audio, and video base types

- [UTTypeImage](uttypeimage.md): A base type that represents image data.
- [UTTypeAudio](uttypeaudio.md): A type that represents audio that doesn’t contain video.
- [UTTypeAudiovisualContent](uttypeaudiovisualcontent.md): A base type that represents data that contains video content that may or may not also include audio.
- [UTTypeMovie](uttypemovie.md): A base type representing media formats that may contain both video and audio.
- [UTTypeVideo](uttypevideo.md): A type that represents video that doesn’t contain audio.

### Tag classes

- [UTTagClassFilenameExtension](uttagclassfilenameextension.md): The string identifier for the tag that maps to filename extensions.
- [UTTagClassMIMEType](uttagclassmimetype.md): The string identifier for the tag that maps to MIME types.

## See Also

### Essentials

- [Defining file and data types for your app](defining-file-and-data-types-for-your-app.md): Declare uniform type identifiers to support your app’s proprietary data formats.
