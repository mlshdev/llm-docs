> Commit-pinned source for n8n main: [docs/build/work-with-data/transform-data/expression-reference/binaryfile.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/build/work-with-data/transform-data/expression-reference/binaryfile.md)

# BinaryFile <a id="binaryfile"></a>

## `binaryFile`.**`directory`** <a id="binaryfiledirectory"></a>

**Description:** The path to the directory that the file is stored in. Useful for distinguishing between files with the same name in different directories. Not set if n8n is  configured to store files in its database.

**Syntax:** `binaryFile`.**`directory`**

**Returns:** String

**Source:**  Custom n8n functionality

## `binaryFile`.**`fileExtension`** <a id="binaryfilefileextension"></a>

**Description:** The suffix attached to the filename (e.g. <code>txt</code>)

**Syntax:** `binaryFile`.**`fileExtension`**

**Returns:** String

**Source:**  Custom n8n functionality

## `binaryFile`.**`fileName`** <a id="binaryfilefilename"></a>

**Description:** The name of the file, including extension

**Syntax:** `binaryFile`.**`fileName`**

**Returns:** String

**Source:**  Custom n8n functionality

## `binaryFile`.**`fileSize`** <a id="binaryfilefilesize"></a>

**Description:** A string representing the size of the file

**Syntax:** `binaryFile`.**`fileSize`**

**Returns:** String

**Source:**  Custom n8n functionality

## `binaryFile`.**`fileType`** <a id="binaryfilefiletype"></a>

**Description:** A string representing the type of the file, e.g. <code>image</code>. Corresponds to the first part of the MIME type.

**Syntax:** `binaryFile`.**`fileType`**

**Returns:** String

**Source:**  Custom n8n functionality

## `binaryFile`.**`id`** <a id="binaryfileid"></a>

**Description:** The unique ID of the file. Used to identify the file when it is stored on disk or in a storage service such as S3.

**Syntax:** `binaryFile`.**`id`**

**Returns:** String

**Source:**  Custom n8n functionality

## `binaryFile`.**`mimeType`** <a id="binaryfilemimetype"></a>

**Description:** A string representing the format of the file’s contents, e.g. <code>image/jpeg</code>

**Syntax:** `binaryFile`.**`mimeType`**

**Returns:** String

**Source:**  Custom n8n functionality
