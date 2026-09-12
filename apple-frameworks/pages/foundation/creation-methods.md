> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/creation-methods](https://developer.apple.com/documentation/foundation/creation-methods)

# Creation methods (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Create attributed strings from existing content or raw text and apply the initial attributes.

## Topics

### Creating from another string

- [init(string:)](nsattributedstring/init%28string_%29.md): Creates an attributed string with the specified text and no attribute information.
- [init(string:attributes:)](nsattributedstring/init%28string_attributes_%29.md): Creates an attributed string with the specified text and attributes.
- [init(attributedString:)](nsattributedstring/init%28attributedstring_%29.md): Creates a new attributed string from the contents of another attributed string.

### Creating a formatted string

- [init(\_:)](nsattributedstring/init%28__%29.md): Creates a reference-type attributed string from the specified value-type attributed string.
- [init(\_:including:)](nsattributedstring/init%28__including_%29-9gogq.md): Creates a reference-type attributed string from the specified value-type attributed string, including an attribute scope.
- [init(\_:including:)](nsattributedstring/init%28__including_%29-8iy4i.md): Creates a reference-type attributed string from the specified value-type attributed string, including an attribute scope that a key path identifies.

### Creating from a data file

- [init(data:options:documentAttributes:)](nsattributedstring/init%28data_options_documentattributes_%29.md): Creates an attributed string from the contents of the specified data object.
- [init(docFormat:documentAttributes:)](nsattributedstring/init%28docformat_documentattributes_%29.md): Creates an attributed string from Microsoft Word format data in the specified data object.
- [init(URL:options:documentAttributes:)](nsattributedstring/init%28url_options_documentattributes_%29.md): Creates an attributed string from the contents of the specified URL.

### Creating from HTML

- [loadFromHTML(request:options:completionHandler:)](nsattributedstring/loadfromhtml%28request_options_completionhandler_%29.md): Creates an attributed string by converting the contents of the specified HTML URL request.
- [loadFromHTML(fileURL:options:completionHandler:)](nsattributedstring/loadfromhtml%28fileurl_options_completionhandler_%29.md): Creates an attributed string by converting the content of a local HTML file at the specified URL.
- [loadFromHTML(string:options:completionHandler:)](nsattributedstring/loadfromhtml%28string_options_completionhandler_%29.md): Creates an attributed string from the specified HTML string.
- [loadFromHTML(data:options:completionHandler:)](nsattributedstring/loadfromhtml%28data_options_completionhandler_%29.md): Creates an attributed string from the specified HTML data.
- [NSAttributedString.CompletionHandler](nsattributedstring/completionhandler.md): A completion handler for getting an asynchronous attributed string.
- [init(HTML:documentAttributes:)](nsattributedstring/init%28html_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.
- [init(HTML:baseURL:documentAttributes:)](nsattributedstring/init%28html_baseurl_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object and base URL.
- [init(HTML:options:documentAttributes:)](nsattributedstring/init%28html_options_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.

### Creating from RTF

- [init(RTF:documentAttributes:)](nsattributedstring/init%28rtf_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.
- [init(RTFD:documentAttributes:)](nsattributedstring/init%28rtfd_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTFD commands and data in the specified data object.
- [init(RTFDFileWrapper:documentAttributes:)](nsattributedstring/init%28rtfdfilewrapper_documentattributes_%29.md): Creates an attributed string from the specified file wrapper that contains an RTFD document.

### Creating from markdown

- [init(markdown:options:baseURL:)](nsattributedstring/init%28markdown_options_baseurl_%29-m9n.md): Creates an attributed string from a Markdown-formatted string using the provided options.
- [init(markdown:options:baseURL:)](nsattributedstring/init%28markdown_options_baseurl_%29-5nru2.md): Creates an attributed string from Markdown-formatted data using the provided options.
- [init(contentsOf:options:baseURL:)](nsattributedstring/init%28contentsof_options_baseurl_%29.md): Creates an attributed string from the contents of a specified URL that contains Markdown-formatted data using the provided options.

### Creating a string with an attachment

- [init(attachment:)](nsattributedstring/init%28attachment_%29.md): Creates an attributed string with an attachment.
- [init(attachment:attributes:)](nsattributedstring/init%28attachment_attributes_%29.md): Creates an attributed string with an attachment and applies the specified attributes to it.
- [init(adaptiveImageGlyph:attributes:)](nsattributedstring/init%28adaptiveimageglyph_attributes_%29.md): Creates an attributed string with an adaptive image glyph and applies the specified attributes to it.

# Creation methods (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Create attributed strings from existing content or raw text and apply the initial attributes.

## Topics

### Creating from another string

- [initWithString:](nsattributedstring/init%28string_%29.md): Creates an attributed string with the specified text and no attribute information.
- [initWithString:attributes:](nsattributedstring/init%28string_attributes_%29.md): Creates an attributed string with the specified text and attributes.
- [initWithAttributedString:](nsattributedstring/init%28attributedstring_%29.md): Creates a new attributed string from the contents of another attributed string.

### Creating a formatted string

- [initWithFormat:options:locale:](nsattributedstring/initwithformat_options_locale_.md): Initializes an attributed string by substituting arguments into a specially formatted string.
- [initWithFormat:options:locale:arguments:](nsattributedstring/initwithformat_options_locale_arguments_.md): Initializes an attributed string by substituting a list of function arguments into a specially formatted string.
- [initWithFormat:options:locale:context:](nsattributedstring/initwithformat_options_locale_context_.md): Initializes an attributed string by substituting arguments into a specially formatted string and applying additional contextual information.
- [initWithFormat:options:locale:context:arguments:](nsattributedstring/initwithformat_options_locale_context_arguments_.md): Initializes an attributed string by substituting a list of function arguments into a specially formatted string and applying additional contextual information.
- [localizedAttributedStringWithFormat:](nsattributedstring/localizedattributedstringwithformat_.md): Creates an attributed string by substituting arguments into a specially formatted string.
- [localizedAttributedStringWithFormat:options:](nsattributedstring/localizedattributedstringwithformat_options_.md): Creates an attributed string by substituting a list of function arguments into a specially formatted string.
- [localizedAttributedStringWithFormat:context:](nsattributedstring/localizedattributedstringwithformat_context_.md): Creates an attributed string by substituting arguments into a specially formatted string and applying additional contextual information.
- [localizedAttributedStringWithFormat:options:context:](nsattributedstring/localizedattributedstringwithformat_options_context_.md): Creates an attributed string by substituting a list of function arguments into a specially formatted string and applying additional contextual information.
- [NSAttributedStringFormattingOptions](nsattributedstringformattingoptions.md): Options to use when creating an attributed string from a format string and variable list of arguments.

### Creating from a data file

- [initWithData:options:documentAttributes:error:](nsattributedstring/init%28data_options_documentattributes_%29.md): Creates an attributed string from the contents of the specified data object.
- [initWithDocFormat:documentAttributes:](nsattributedstring/init%28docformat_documentattributes_%29.md): Creates an attributed string from Microsoft Word format data in the specified data object.
- [initWithURL:options:documentAttributes:error:](nsattributedstring/init%28url_options_documentattributes_%29.md): Creates an attributed string from the contents of the specified URL.

### Creating from HTML

- [loadFromHTMLWithRequest:options:completionHandler:](nsattributedstring/loadfromhtml%28request_options_completionhandler_%29.md): Creates an attributed string by converting the contents of the specified HTML URL request.
- [loadFromHTMLWithFileURL:options:completionHandler:](nsattributedstring/loadfromhtml%28fileurl_options_completionhandler_%29.md): Creates an attributed string by converting the content of a local HTML file at the specified URL.
- [loadFromHTMLWithString:options:completionHandler:](nsattributedstring/loadfromhtml%28string_options_completionhandler_%29.md): Creates an attributed string from the specified HTML string.
- [loadFromHTMLWithData:options:completionHandler:](nsattributedstring/loadfromhtml%28data_options_completionhandler_%29.md): Creates an attributed string from the specified HTML data.
- [initWithHTML:documentAttributes:](nsattributedstring/init%28html_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.
- [initWithHTML:baseURL:documentAttributes:](nsattributedstring/init%28html_baseurl_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object and base URL.
- [initWithHTML:options:documentAttributes:](nsattributedstring/init%28html_options_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.

### Creating from RTF

- [initWithRTF:documentAttributes:](nsattributedstring/init%28rtf_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTF commands and data in the specified data object.
- [initWithRTFD:documentAttributes:](nsattributedstring/init%28rtfd_documentattributes_%29.md): Creates an attributed string by decoding the stream of RTFD commands and data in the specified data object.
- [initWithRTFDFileWrapper:documentAttributes:](nsattributedstring/init%28rtfdfilewrapper_documentattributes_%29.md): Creates an attributed string from the specified file wrapper that contains an RTFD document.

### Creating from markdown

- [initWithMarkdownString:options:baseURL:error:](nsattributedstring/initwithmarkdownstring_options_baseurl_error_.md): Creates an attributed string from a Markdown-formatted string using the provided options.
- [initWithMarkdown:options:baseURL:error:](nsattributedstring/initwithmarkdown_options_baseurl_error_.md): Creates an attributed string from Markdown-formatted data using the provided options.
- [initWithContentsOfMarkdownFileAtURL:options:baseURL:error:](nsattributedstring/initwithcontentsofmarkdownfileaturl_options_baseurl_error_.md): Creates an attributed string from the contents of a specified URL that contains Markdown-formatted data using the provided options.
- [NSAttributedStringMarkdownParsingOptions](nsattributedstringmarkdownparsingoptions.md): Options that affect the parsing of Markdown content into an attributed string.

### Creating a string with an attachment

- [attributedStringWithAttachment:](nsattributedstring/init%28attachment_%29.md): Creates an attributed string with an attachment.
- [attributedStringWithAttachment:attributes:](nsattributedstring/init%28attachment_attributes_%29.md): Creates an attributed string with an attachment and applies the specified attributes to it.
- [attributedStringWithAdaptiveImageGlyph:attributes:](nsattributedstring/init%28adaptiveimageglyph_attributes_%29.md): Creates an attributed string with an adaptive image glyph and applies the specified attributes to it.
